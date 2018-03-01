

import Head from 'next/head'
import fetch from 'isomorphic-unfetch'


import Layout from '../layouts/main';

import Wrapper from '../components/Wrapper'

import Avatarlist from '../components/Avatarlist'
import Bookingmap from '../components/Bookingmap'
import Hero from '../components/Hero';
import Googlemap from '../components/Googlemap'




class Index extends React.Component {

  static async getInitialProps({req})
  {

    const res = await fetch('https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/exhibitors')
    const data = await res.json()

    const res2 = await fetch('https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/bookingmap')
    const data2 = await res2.json()

    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent : userAgent, exhibitors : data.data, booths : data2.data  }
  }

  render()
  {

    const { exhibitors, booths } = this.props;

    return (

     <Layout>

      <Head>
        <title>targiehandlu.pl xxx</title>
      </Head>

      {/* <Hero videoSrc="https://s3.eu-central-1.amazonaws.com/eventjuicer-assets/video11_2.mp4" /> */}

      <Wrapper title="Zarezerwuj stoisko!">
        <Bookingmap data={ booths } />
      </Wrapper>

      {/* <Wrapper title="Wystawcy">
      <Avatarlist data={ exhibitors } />
      </Wrapper>

      <Googlemap /> */}

      </Layout>

    )
  }

}


export default Index;
