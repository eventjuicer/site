
import dynamic from 'next/dynamic'
import reduxPage from '../redux'
import Layout from '../layouts/main';


import {
  MyHead as Head,
  MyLink as Link
} from '../next'


import {
  Wrapper,
  Avatarlist,
  ColumnList,
//  Bookingmap,
  Gallery,
//  WidthAwareInfo,
  People,
  HeroCustom as Hero,
//  Reviews
} from '../components'


const Bookingmap = dynamic(import("../components/Bookingmap"))


import Visitor from '../roles/Visitor'
import {fetcher} from '../helpers'


class PageIndex extends React.Component {

  static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
  {

    const results = await fetcher({exhibitors : false}, store);
    return { exhibitors : results.getData("exhibitors") }

  }

  render()
  {

    const { exhibitors, url } = this.props;

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
          <Link key="all" href="/presenters" label="common.menu.visitors.presenters" variant="flat" color="secondary" />,
          <Link key="subjects" href="/schedule" label="common.menu.visitors.schedule" variant="flat" color="secondary" />
        ]}
      >
        <People limit={8} random={true} filter={function(item){ return item.bio.length > 10 }}  />
      </Wrapper>



      <Wrapper label="visitors.register_alt"

        //  links={[
        //   <Link key="more" href="/visit" label="visitors.more_info" variant="flat" />
        // ]}
      >
        <Visitor />
      </Wrapper>




      <Wrapper
        label="exhibitors.list_featured"
        secondaryTitle="i ponad 120 innych Wystawców"
        links={[
          <Link key="all" href="/exhibitors" label="common.menu.visitors.exhibitors" variant="flat" color="secondary" />,
        ]}
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




      <Gallery label="event.gallery" />


{/*
      <Wrapper text="Opinie o Targach Ehandlu">
        <Reviews />
      </Wrapper>

 */}

      <Wrapper label="exhibitors.list_full" color="#ffffff">
        <ColumnList data={ exhibitors } />
      </Wrapper>



      <Wrapper
        label="visitors.register"
        secondaryTitle="Spotkamy się w gronie ponad 3000 osób!"
      //   links={[
      //   <Link key="more" href="/visit" label="visitors.more_info" variant="flat" color="secondary" />
      // ]}
      >
      <Visitor  />
      </Wrapper>




      </Layout>

    )
  }

}

export default reduxPage( PageIndex )
