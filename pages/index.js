
import dynamic from 'next/dynamic'
import Head from '../next/MyHead'
import fetch from 'isomorphic-unfetch'


import reduxPage from '../redux/store'
import Layout from '../layouts/main';


import {
  Wrapper,
  Avatarlist,
  ColumnList,
  Bookingmap,
  Typography,
  Gallery,
  WidthAwareInfo,
  People
} from '../components'

import Hero from '../components/HeroCustom'

//const Gallery = dynamic(import('../components/GalleryQuoted'))

import {resourceFetchSuccess} from '../components/redux/actions'
import Visitor from '../components/roles/Visitor'
import Link from '../next/MyLink'


class PageIndex extends React.Component {

  static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
  {

    const _exhibitors = await fetch('https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/exhibitors')
    const exhibitors = await _exhibitors.json()

  //   const _bookingmap = await fetch('https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/bookingmap')
  //   const bookingmap = await _bookingmap.json()
  //
  //   /*
  //   if (!store.getState().placeholderData) {
  //     store.dispatch(resourceFetchSuccess())
  //   }
  // */
  //
  // store.dispatch(
  //   resourceFetchSuccess("exhibitors", exhibitors.data)
  // )
  //
  //
    store.dispatch(
      resourceFetchSuccess("exhibitors", exhibitors.data)
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

    const { exhibitors, booths, url, userAgent } = this.props;

    return (

     <Layout>

      <Head />

      <Hero />

      <Wrapper
        label="visitors.register"
        secondaryTitle="Spotkamy się w gronie ponad 3000 osób!"
      //   links={[
      //   <Link key="more" href="/visit" label="visitors.more_info" variant="flat" color="secondary" />
      // ]}
      >
      <Visitor  />
      </Wrapper>


      <Wrapper
        label="presenters.list_featured"
        secondaryTitle="Udział bezpłatny. Pełna agenda już wkrótce..."
        links={[
          <Link key="more" href="/agenda" label="presenters.list_full" variant="flat" color="secondary" />
        ]}
      >
        <People limit={4} random={true} filter={function(item){ return [71460, 71462, 71461, 71463, 71703, 71707, 71708, 71709].indexOf(item.id) > -1; }}  />
      </Wrapper>


      <Wrapper
        label="exhibitors.list_featured"
        secondaryTitle="i ponad 120 innych Wystawców"
      //  dense={true}
      >
        <Avatarlist filter={function(item){ return item.featured; }} data={ exhibitors } />
      </Wrapper>


      <Wrapper
        label="exhibitors.map.title"
        secondaryTitle="Chcesz się wystawić? Zostało tylko kilka stoisk!"
        >
        {/* <WidthAwareInfo /> */}
        <Bookingmap  />
      </Wrapper>


      <Wrapper label="visitors.register_alt"

        //  links={[
        //   <Link key="more" href="/visit" label="visitors.more_info" variant="flat" />
        // ]}
      >
        <Visitor />
      </Wrapper>


      <Gallery label="event.gallery" />

      <Wrapper label="exhibitors.list_full" color="#ffffff">
        <ColumnList data={ exhibitors } />
      </Wrapper>




      </Layout>

    )
  }

}

export default reduxPage( PageIndex )
