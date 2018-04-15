
import dynamic from 'next/dynamic'
import {
  MyHead as Head,
  MyLink as Link
} from '../next'

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

import {fetcher} from '../helpers'

class PageExhibitors extends React.Component {

  static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
  {
    const results = await fetcher({exhibitors : false, bookingmap : false}, store)
    return { exhibitors : results.getData("exhibitors") }
  }


  render()
  {

    const { exhibitors, booths } = this.props;


    return (

     <Layout>

      <Head />


      <Wrapper label="exhibitors.list_full" first>
        <Avatarlist data={ exhibitors } limit="200" mobile={false} />
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



      </Layout>

    )
  }

}

export default reduxPage(PageExhibitors, (state) => ({foo: state.foo}) )
