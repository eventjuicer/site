
import dynamic from 'next/dynamic'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import reduxPage from '../redux/store'
import Layout from '../layouts/main';

import {Wrapper, Avatarlist, Bookingmap, Hero, Googlemap} from '../components'

//const Gallery = dynamic(import('../components/GalleryQuoted'))
import Gallery from '../components/GalleryQuoted'

class Index extends React.Component {

  static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
  {

    const _exhibitors = await fetch('https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/exhibitors')
    const exhibitors = await _exhibitors.json()

    const _bookingmap = await fetch('https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/bookingmap')
    const bookingmap = await _bookingmap.json()

    /*
    if (!store.getState().placeholderData) {
  store.dispatch(loadData())
  }
  */


    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return {   userAgent : userAgent, exhibitors : exhibitors.data, booths : bookingmap.data }
    //return {};
  }


  componentDidMount () {
   /*
    this.props.dispatch(startClock())
  */
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
        <Bookingmap booths={ booths } />
      </Wrapper>


        <Wrapper title="Wystawcy">
        <Avatarlist data={ exhibitors } />
        </Wrapper>

        <Gallery />

      {/* <Googlemap /> */}

      </Layout>

    )
  }

}

export default reduxPage(Index, (state) => ({foo: state.foo}) )
