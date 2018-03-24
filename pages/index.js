
import dynamic from 'next/dynamic'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import reduxPage from '../redux/store'
import Layout from '../layouts/main';

import {Wrapper, Avatarlist, Bookingmap , Googlemap} from '../components'
import Hero from '../components/roles/HeroWithSelectors'

//const Gallery = dynamic(import('../components/GalleryQuoted'))
import Gallery from '../components/GalleryQuoted'

import {resourceFetchSuccess} from '../components/redux/actions'
import MyTypography from '../components/MyTypography'

class Index extends React.Component {

  static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
  {

    const _exhibitors = await fetch('https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/exhibitors')
    const exhibitors = await _exhibitors.json()

    const _bookingmap = await fetch('https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/bookingmap')
    const bookingmap = await _bookingmap.json()

    /*
    if (!store.getState().placeholderData) {
      store.dispatch(resourceFetchSuccess())
    }
  */

  // store.dispatch(
  //   resourceFetchSuccess("exhibitors", exhibitors.data)
  // )


    store.dispatch(
      resourceFetchSuccess("bookingmap", bookingmap.data)
    )

    //booths : bookingmap.data

    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return {   userAgent : userAgent, exhibitors : exhibitors.data }
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

      <MyTypography>{(name) => <div>{name}</div>}</MyTypography>


        <Hero
          videoSrc="https://s3.eu-central-1.amazonaws.com/eventjuicer-assets/video11_2.mp4"

         />

      <Wrapper label="bookingmap.title">
        <Bookingmap  /> {/*booths*/}
      </Wrapper>


        <Wrapper title="exhibitors.title">
        <Avatarlist data={ exhibitors } />
        </Wrapper>

        <Gallery />

      {/* <Googlemap /> */}

      </Layout>

    )
  }

}

export default reduxPage(Index, (state) => ({foo: state.foo}) )
