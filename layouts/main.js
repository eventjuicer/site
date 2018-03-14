

import Head from 'next/head'
import dynamic from 'next/dynamic'
import withMui from '../next/withMui'

import MyAppBar from '../components/MyAppBar'
import Footer from '../components/Footer'
import Wrapper from '../components/Wrapper'

const Dialog = dynamic(import('../components/MyDialog'))
const Snackbar = dynamic(import('../components/MySnackbar'))
const Drawer = dynamic(import('../components/MyDrawer'))


const Layout = (props) => (
  <div>

    <Head>
    <title>targiehandlu.pl</title>
    </Head>

    <MyAppBar />

    {props.children}

    <Wrapper title="">
      <Footer  />
    </Wrapper>

    <Dialog />
    <Snackbar />
    <Drawer />

  </div>
)


export default withMui(Layout);
