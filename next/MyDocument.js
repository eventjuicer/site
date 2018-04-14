import React from 'react';
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

    const { pageContext } = this.props;

    return (
    <html lang="en" dir="ltr">
      <Head>

        <style>{`body { margin: 0 } /* custom! */`}</style>
        <meta
                    name="viewport"
                    content={
                      'user-scalable=0, initial-scale=1, ' +
                      'minimum-scale=1, width=device-width, height=device-height'
                    }
                  />

        <meta name="theme-color" content={pageContext.theme.palette.primary.main} />

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

  // Resolution order
  //
  // On the server:
  // 1. page.getInitialProps
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the server with error:
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. page.getInitialProps
  // 3. page.render

  // Get the context of the page to collected side effects.


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
      <React.Fragment>
      <style
        id="jss-server-side"
        // eslint-disable-next-line
        dangerouslySetInnerHTML={{
          __html: pageContext.sheetsRegistry.toString(),
        }}
      />

      {flush() || null}

    </React.Fragment>
    ),
  };
};

export default MyDocument;
