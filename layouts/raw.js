
import Router from 'next/router'

import {
  MyHead as Head,
  withMui
} from '../next'

import {TranslationProvider} from '../i18n'

import customMessages from 'eventjuicer-site-translations'

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
  <Head />
  {props.children}
  </div>
  </TranslationProvider>
)


Layout.defaultProps = {
}


export default withMui(Layout);
