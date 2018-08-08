import dynamic from 'next/dynamic';

import { connect } from 'react-redux';
import Layout from '../layouts/main';

import {
  Wrapper,
  Avatarlist,
  Typography,
  Gallery,
  WidthAwareInfo,
  People,
  HeroCustom as Hero
} from '../components';

import { MyHead as Head, MyLink as Link } from '../next';

import Visitor from '../roles/Visitor';

const Bookingmap = dynamic(import('../components/Bookingmap'));

class PageExhibit extends React.Component {
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

    return { preload : ["exhibitors"] };
  }

  render() {

    const { url } = this.props;

    return (
      <Layout>
        <Head />

        <Wrapper
          first
          label="exhibitors.map.title"
          secondaryTitle="Oficjalny start publicznej sprzedaży wkrótce."
        >
          {/* <WidthAwareInfo /> */}
          <Bookingmap />
        </Wrapper>

        {/* <Wrapper
        label="exhibitors.list_full"

      //  dense={true}
      >
        <Avatarlist  data={ exhibitors } limit={null} />
      </Wrapper> */}

        <Gallery label="event.gallery" />
      </Layout>
    );
  }
}

export default connect()(PageExhibit);
