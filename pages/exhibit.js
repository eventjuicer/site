
import dynamic from 'next/dynamic'

import {connect} from 'react-redux'
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

const Bookingmap = dynamic(import("../components/Bookingmap"))

class PageExhibit extends React.Component {

  static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
  {
    const results = await fetcher({exhibitors : false}, store)

    return {  exhibitors : results.getData("exhibitors") }
  }


  render()
  {

    const { exhibitors, url } = this.props;

    return (

     <Layout>

      <Head />

      <Wrapper
        first
        label="exhibitors.map.title"
        secondaryTitle="Oficjalny start publicznej sprzedaży wkrótce."
        >
        {/* <WidthAwareInfo /> */}
        <Bookingmap  />
      </Wrapper>


      {/* <Wrapper
        label="exhibitors.list_full"

      //  dense={true}
      >
        <Avatarlist  data={ exhibitors } limit={null} />
      </Wrapper> */}


      <Gallery label="event.gallery" />

      </Layout>

    )
  }

}

export default connect()( PageExhibit )
