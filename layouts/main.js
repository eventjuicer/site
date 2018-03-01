
import MyAppBar from '../components/MyAppBar'
import withMui from '../withMui'
import Head from 'next/head'
import Footer from '../components/Footer'
import Wrapper from '../components/Wrapper'


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

  </div>
)


export default withMui(Layout);
