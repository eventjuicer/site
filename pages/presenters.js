import { MyHead as Head } from '../next';

import { connect } from 'react-redux';

import {
  Typography,
  Wrapper,
  WhoIsGonnaBeThere,
  //  Googlemap,
  People
} from '../components';

import Layout from '../layouts/main';

import Visitor from '../roles/Visitor';

class PagePresenters extends React.Component {
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
    return {};
  }

  render() {
    const { url } = this.props;

    return (
      <Layout>
        <Head />

        {/* <Wrapper
        first
        label="presenters.list_full"
        secondaryTitle="Expo start 10:00, Prezentacje start 11:15, Wstęp BEZPŁATNY (wymagana rejestracja)"
      // links={[
      //   <Link href="/agenda" label="presenters.list_full" variant="flat" color="secondary" />
      // ]}
      >
        <People link={true} random={false} filter={function(item){ return item.bio && item.bio.length >5; }}   />
      </Wrapper> */}

        <Wrapper label="visitors.register_alt">
          <Visitor />
        </Wrapper>

        <Wrapper label="visitors.attendees">
          <WhoIsGonnaBeThere />
        </Wrapper>

        <Wrapper label="visitors.register">
          <Visitor />
        </Wrapper>

        {/* <Googlemap /> */}
      </Layout>
    );
  }
}

export default connect()(PagePresenters);
