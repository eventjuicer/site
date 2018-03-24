
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import JssProvider from 'react-jss/lib/JssProvider'
import getContext from '../material-ui/muiContext';

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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:100,300,400,500,700" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google" content="notranslate" />
        {/* <script src="https://use.fontawesome.com/6de33398df.js"></script> */}
      </Head>

      <body className="eventjuicer_site">
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
