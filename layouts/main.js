
import dynamic from 'next/dynamic'
import Router from 'next/router'
import withMui from '../next/withMui'

import {MyHead as Head} from '../next'

import Chatlio from '../services/Chatlio'
import {TranslationProvider} from '../i18n'

import {
  MyAppBar,
  Footer
} from '../components'

const Dialog = dynamic(import('../components/MyDialog'))
const Snackbar = dynamic(import('../components/MySnackbar'))
const Drawer = dynamic(import('../components/MyDrawer'))

import ScreenSize from '../material-ui/ScreenSize'
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


const Layout = (props) => (
  <TranslationProvider locale="pl" messages={customMessages}>
  <div>

    <ScreenSize />

    <Head />


    <MyAppBar />

      {props.children}


      <Footer  />


    <Dialog />
    <Snackbar />
    <Drawer />

    <Chatlio button={false} />

  </div>
  </TranslationProvider>
)



export default withMui(Layout);
