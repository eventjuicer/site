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
  HeroCustom as Hero
  //  Reviews
} from '../components';

const Bookingmap = dynamic(import('../components/Bookingmap'));
import Visitor from '../roles/Visitor';
import { fetcher } from '../helpers';

class PageIndex extends React.Component {
  static async getInitialProps({
    err,
    req,
    res,
    pathname,
    query,
    asPath,
    isServer,
    store
  }) {
    const results = await fetcher({ exhibitors: false }, store);
    return { exhibitors: results.getData('exhibitors') };

    // const results = await fetcher({exhibitors : false, presenters : false}, store);
    //
    // return {
    //   exhibitors : results.getData("exhibitors"),
    //   presenters : results.getData("presenters")
    // }
  }

  render() {
    const { exhibitors, url } = this.props;

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
          secondaryTitle="Trwa sprzedaż dla Wystawców poprzedniej edycji"
        >
          <Bookingmap />
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
          {/* <Avatarlist filter={function(item){ return item.featured; }} data={ exhibitors } /> */}

          <Avatarlist data={exhibitors} />
        </Wrapper>

        {/*
      <Wrapper
        label="visitors.register"
        secondaryTitle="22 Prezentacje, 150 Wystawców i prawdziwy networking!"
      >
      <Visitor  />
      </Wrapper>


 */}

        {/* <Wrapper label="visitors.register_alt">
        <Visitor />
      </Wrapper> */}

        <Gallery label="event.gallery" />

        <Wrapper label="exhibitors.list_full" color="#ffffff">
          <ColumnList data={exhibitors} />
        </Wrapper>

        {/* <Wrapper
        label="visitors.register"
        secondaryTitle="Spotkamy się w gronie ponad 3000 osób!"
      //   links={[
      //   <Link key="more" href="/visit" label="visitors.more_info" variant="flat" color="secondary" />
      // ]}
      >
      <Visitor  />
      </Wrapper> */}
      </Layout>
    );
  }
}

export default connect(
  null,
  null
)(PageIndex);
