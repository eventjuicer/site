import dynamic from 'next/dynamic';
import { connect } from 'react-redux';

import Layout from '../layouts/main';

import { MyHead as Head, MyLink as Link } from '../next';

import {
  Wrapper,
  Avatarlist,
  ColumnList,
  //  Bookingmap,
  Gallery,
  //  WidthAwareInfo
  Schedule,
  FsButtons as Hero,
  //  Reviews
  HeroCustom,
  KeywordSelect,
  Centered
} from '../components';


import { Exhibitors, Photos } from '../datasources'
import Visitor from '../roles/Visitor';
const Bookingmap = dynamic(import('../components/Bookingmap'));


class PageIndex extends React.Component {

  static async getInitialProps({
    query,
    isServer,
    store
  }) {
    return {
      preload : ["exhibitors"],
  //    load : ["bookingmap", "formdata", "ticketgroups"]
    }
  }

  render() {

    return (

      <Layout>

        <Head />

        <Hero />

        {/* <Wrapper
        label="presenters.schedule"
        secondaryTitle="Expo start 10:00, Prezentacje start 11:15, Wstęp BEZPŁATNY (wymagana rejestracja)"
        links={[
          <Link key="all" href="/presenters" label="common.menu.visitors.presenters" variant="flat" color="secondary" />,
          // <Link key="subjects" href="/schedule" label="common.menu.visitors.schedule" variant="flat" color="secondary" />
        ]}
      >
        <Schedule />
        <People limit={8} random={false} link={true}  filter={function(item){ return item.bio.length > 10 }}  />
      </Wrapper> */}

        <Wrapper
          label="exhibitors.map.title"
          secondaryLabel="exhibitors.map.opensales"
        >

        <Bookingmap />

        <Exhibitors>{
            (exhibitors, keywords) => <Centered><KeywordSelect keywords={keywords} /></Centered>
        }</Exhibitors>

        </Wrapper>

        <Wrapper
          label="exhibitors.list_featured"
          secondaryTitle=""
          links={[
            <Link
              key="all"
              href="/exhibitors"
              label="common.menu.visitors.exhibitors"
              variant="flat"
              color="secondary"
            />
          ]}
        >


          <Exhibitors filter={(e) => e.featured}>{
            (exhibitors) => <Avatarlist data={exhibitors} />
          }</Exhibitors>


        </Wrapper>


      <HeroCustom />


      <Wrapper
        label="visitors.register"
        secondaryTitle="22 Prezentacje, 150 Wystawców i prawdziwy networking!"
      >
        <Visitor  />
      </Wrapper>


      <Photos>{
        (photos, size) => <Gallery data={photos} size={size} label="event.gallery" />
      }</Photos>


        <Wrapper label="exhibitors.list_full" color="#ffffff">

        <Exhibitors columns={true}>
          {(exhibitors) => <ColumnList data={exhibitors} /> }
        </Exhibitors>

        </Wrapper>


      </Layout>
    );
  }
}

export default connect(null, null)(PageIndex);
