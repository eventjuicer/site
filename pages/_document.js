import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import JssProvider from 'react-jss/lib/JssProvider'
import getContext from '../next/context';



class MyDocument extends Document {

  // static getInitialProps({ renderPage }) {
  //   const { html, head, errorHtml, chunks } = renderPage()
  //   const styles = flush()
  //   return { html, head, errorHtml, chunks, styles }
  // }

  render() {
    return (
      <html lang="en">
        <Head>
          <link
           rel="shortcut icon"
           href="https://storage.googleapis.com/builderbook/favicon32.png"
         />
         <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500" />
         <meta charSet="utf-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <meta name="google" content="notranslate" />

         <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body className="custom_class">

          {this.props.customValue}
          <Main />
          <NextScript />
         </body>
      </html>
    )
  }
}


MyDocument.getInitialProps = ({ renderPage }) => {
  const pageContext = getContext();
  const page = renderPage(Component => props => (
    <JssProvider
      registry={pageContext.sheetsRegistry}
      generateClassName={pageContext.generateClassName}
    >
      <Component pageContext={pageContext} {...props} />
    </JssProvider>
  ));

  return {
    ...page,
    pageContext,
    styles: (
      <style
        id="jss-server-side"
        // eslint-disable-next-line
        dangerouslySetInnerHTML={{
          __html: pageContext.sheetsRegistry.toString(),
        }}
      />
    ),
  };
};

export default MyDocument;
