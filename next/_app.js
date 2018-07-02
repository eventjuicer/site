import React from 'react';
import App, { Container } from 'next/app';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import {getMuiContext} from '../material-ui';


import {Provider} from 'react-redux'
import createStore from '../redux'

import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'

class MyApp extends App {


  static async getInitialProps ({ Component, router, ctx }) {

    return {
              pageProps: {
                  // Call page-level getInitialProps
                  ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
              }
    };
  }


  constructor(props) {
    super(props);
    this.pageContext = getMuiContext();
  }


  pageContext = null;


  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;


    return (
      <Container>
        {/* Wrap every page in Jss and Theme providers */}
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server side. */}

                 <Provider store={store}>
                   <Component pageContext={this.pageContext} {...pageProps} />
                </Provider>

          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}

export default withRedux(createStore)(
  withReduxSaga({ async: true })(MyApp)
)
