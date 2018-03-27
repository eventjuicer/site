

import Head from 'next/head'
import withMui from '../next/withMui'
import {TranslationProvider} from '../i18n'
import {customMessages} from '../i18n'
import Router from 'next/router'




Router.onRouteChangeComplete = () => {
  if (window.gtag){
    window.gtag('config', window.gaTrackingId, {
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_title: window.document.title,
    });
  }
};



const Layout= (props) => (

  <TranslationProvider locale="pl" messages={customMessages}>
  <div>
  <Head>
  <title></title>
  </Head>
  {props.children}
  </div>
  </TranslationProvider>
)


Layout.defaultProps = {
}


export default withMui(Layout);
