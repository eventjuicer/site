

import React from 'react'
import Head from 'next/head'

class Exhibitor extends React.Component {
//
// static async getInitialProps({req})
// {
//
//   const res = await fetch('https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/exhibitors')
//   const data = await res.json()
//
//   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
//   return { userAgent : userAgent, exhibitors : data.data  }
// }

render()
{


  return (<div>

    <Head>
      <title>ID = {this.props.url.query.id}</title>

    </Head>



    <div>Welcome to next.js!</div>

  </div>)
}

}
export default Exhibitor;
