
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import JssProvider from 'react-jss/lib/JssProvider'

import {getMuiContext} from '../material-ui';





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

        <style>{`body { margin: 0 } /* custom! */`}</style>

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
  const pageContext = getMuiContext();
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
