
import dynamic from 'next/dynamic'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'


import reduxPage from '../redux/store'
import Layout from '../layouts/main';
import {Wrapper, Avatarlist, ColumnList, Bookingmap, Typography,  Gallery} from '../components'

//const Gallery = dynamic(import('../components/GalleryQuoted'))
import {resourceFetchSuccess} from '../components/redux/actions'
import Visitor from '../components/roles/Visitor'

import Link from '../next/MyLink'

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


      <Wrapper label="exhibitors.list_all"  dense={true}>
        <Avatarlist data={ exhibitors } />
      </Wrapper>


      <Wrapper label="visitors.register" color="#fafafa" links={[
        <Link href="/visit" label="visitors.more_info" variant="flat" color="secondary" />
      ]}>
      <Visitor  />
      </Wrapper>


      <Wrapper label="exhibitors.map.title">
        <h1>SCROLL </h1>
        <Bookingmap  />
      </Wrapper>




      <Gallery label="event.gallery" />


    <Wrapper label="visitors.register_alt" color="#fafafa" links={[
        <Link href="/visit" label="visitors.more_info" variant="flat" />
    ]}>
      <Visitor />
    </Wrapper>


      </Layout>

    )
  }

}

export default reduxPage(Index, (state) => ({foo: state.foo}) )
