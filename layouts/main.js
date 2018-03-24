

import Head from 'next/head'
import dynamic from 'next/dynamic'
import withMui from '../next/withMui'
import {TranslationProvider} from '../i18n'

import MyAppBar from '../components/MyAppBar'
import Footer from '../components/Footer'


const Dialog = dynamic(import('../components/MyDialog'))
const Snackbar = dynamic(import('../components/MySnackbar'))
const Drawer = dynamic(import('../components/MyDrawer'))

import {customMessages} from '../i18n'

const Layout = (props) => (
  <TranslationProvider locale="pl" messages={customMessages}>
  <div>

    <Head>
    <title>targiehandlu.pl</title>
    </Head>

    <MyAppBar />

      {props.children}


      <Footer  />


    <Dialog />
    <Snackbar />
    <Drawer />

  </div>
  </TranslationProvider>
)


export default withMui(Layout);
