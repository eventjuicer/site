
import dynamic from 'next/dynamic'
import {
  MyHead as Head,
  MyLink as Link
} from '../next'
import fetch from 'isomorphic-unfetch'


import reduxPage from '../redux'
import Layout from '../layouts/main';
import {
  Wrapper,
  Avatarlist,
  ColumnList,
  Bookingmap,
  Typography,
  Gallery,
  resourceFetchSuccess
} from '../components'

//const Gallery = dynamic(import('../components/GalleryQuoted'))
import Visitor from '../roles/Visitor'


class PageExhibitors extends React.Component {

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

      <Head />


      <Wrapper label="exhibitors.list_full"  dense={true}>
        <Avatarlist data={ exhibitors } limit="200" />
      </Wrapper>


      <Wrapper label="visitors.register" color="#fafafa" links={[
        <Link href="/visit" label="visitors.more_info" variant="flat" color="secondary" />
      ]}>
      <Visitor  />
      </Wrapper>


      <Wrapper label="exhibitors.map.title">
        {/* <h1>SCROLL </h1> */}
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

export default reduxPage(PageExhibitors, (state) => ({foo: state.foo}) )
