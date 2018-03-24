

import Head from 'next/head'
import dynamic from 'next/dynamic'
import withMui from '../next/withMui'
import {TranslationProvider} from '../i18n'

import MyAppBar from '../components/MyAppBar'
import Footer from '../components/Footer'
import Wrapper from '../components/Wrapper'


const Dialog = dynamic(import('../components/MyDialog'))
const Snackbar = dynamic(import('../components/MySnackbar'))
const Drawer = dynamic(import('../components/MyDrawer'))


const Layout = (props) => (
  <TranslationProvider locale="pl">
  <div>

    <Head>
    <title>targiehandlu.pl</title>
    </Head>

    <MyAppBar />



      {props.children}


    <Wrapper label="">
      <Footer  />
    </Wrapper>



    <Dialog />
    <Snackbar />
    <Drawer />

  </div>
  </TranslationProvider>
)


export default withMui(Layout);
