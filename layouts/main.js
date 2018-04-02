
import dynamic from 'next/dynamic'
import Head from 'next/head'

import withMui from '../next/withMui'


import Chatlio from '../services/Chatlio'

import {TranslationProvider} from '../i18n'

import {
  MyAppBar,
  Footer
} from '../components'


const Dialog = dynamic(import('../components/MyDialog'))
const Snackbar = dynamic(import('../components/MySnackbar'))
const Drawer = dynamic(import('../components/MyDrawer'))

import customMessages from 'eventjuicer-site-translations'

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


const Layout = (props) => (
  <TranslationProvider locale="pl" messages={customMessages}>
  <div>
{/*
    <Head>
      <title>use MyHead!</title>
    </Head> */}

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
