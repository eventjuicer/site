

import React from 'react'
import Router from 'next/router'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

import Avatarlist from '../components/Avatarlist'
import Bookingmap from '../components/Bookingmap'
import Hero from '../components/Hero';

import Layout from '../layouts/main';
import withLayout from '../withLayout';

class Index extends React.Component {

static async getInitialProps({req})
{

  const res = await fetch('https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/exhibitors')
  const data = await res.json()

  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent : userAgent, exhibitors : data.data  }
}

render()
{

  const { exhibitors } = this.props;

  return (
    <Layout>
    <Head>
      <title>targiehandlu.pl</title>
    </Head>
    <Hero videoSrc="https://s3.eu-central-1.amazonaws.com/eventjuicer-assets/video11_2.mp4" />
    <Bookingmap />
    <Avatarlist data={exhibitors} />
    </Layout>
  )
}

}
export default withLayout(Index);
