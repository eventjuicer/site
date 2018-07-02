
import dynamic from 'next/dynamic'

import {connect} from "react-redux";
import Layout from '../layouts/main';

import Table from '../components/MyTable'

import {
  Wrapper,
  Avatarlist,
  Typography,
  Gallery,
  WidthAwareInfo,
  People,
  HeroCustom as Hero
} from '../components'

import {
  MyHead as Head,
  MyLink as Link
} from '../next'


import Visitor from '../roles/Visitor'

import {fetcher} from '../helpers'


class PageExhibit extends React.Component {

  static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
  {
    const results = await fetcher({events : false})

    return {  events : results.getData("events") }
  }


  render()
  {

    const { events } = this.props;

    return (

     <Layout>

      <Head />

      <Wrapper
        first
        label="exhibitors.map.title"
        secondaryTitle="Oficjalny start publicznej sprzedaży wkrótce."
        >

          <Table data={events} cols={{name : {}, loc : {}, starts : {} }} />

      </Wrapper>


      <Gallery label="event.gallery" />

      </Layout>

    )
  }

}

export default connect()( PageExhibit )
