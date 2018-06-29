
import dynamic from 'next/dynamic'

import reduxPage from '../redux'
import Layout from '../layouts/main';


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
    const results = await fetcher({events : false}, store)

    return {  events : results.getData("events") }
  }


  render()
  {

    const { events, url } = this.props;

    return (

     <Layout>

      <Head />

      <Wrapper
        first
        label="exhibitors.map.title"
        secondaryTitle="Oficjalny start publicznej sprzedaży wkrótce."
        >


      </Wrapper>



      <Gallery label="event.gallery" />

      </Layout>

    )
  }

}

export default reduxPage( PageExhibit )
