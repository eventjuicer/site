

import React from 'react'
import Router from 'next/router'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

import Avatarlist from '../components/Avatarlist'


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

  return (<div>

    <Head>
      <title>co za siarka</title>

    </Head>

    <Avatarlist data={exhibitors} />


    <div>Welcome to next.js!</div>

  </div>)
}

}
export default Index;
