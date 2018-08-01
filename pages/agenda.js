import { MyHead as Head } from '../next';

import { connect } from 'react-redux';

import {
  Typography,
  Wrapper,
  WhoIsGonnaBeThere,
  Schedule,
  //  Googlemap,
  People
} from '../components';

import Layout from '../layouts/main';

import Visitor from '../roles/Visitor';

import { fetcher } from '../helpers';

class PageAgenda extends React.Component {
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
    const results = await fetcher(
      { exhibitors: false, presenters: false },
      store
    );

    return {};
  }

  render() {
    const { router } = this.props;

    return (
      <Layout>
        <Head />

        {/* <Wrapper
          label="presenters.schedule"
          secondaryTitle="Expo start 10:00, Prezentacje start 11:15, Wstęp BEZPŁATNY (wymagana rejestracja)"
          first
        >
          <Schedule  />
        </Wrapper> */}

        <Wrapper label="visitors.register_alt">
          <Visitor />
        </Wrapper>

        {/* <Wrapper first
          label="presenters.list_full"
          secondaryTitle="Czołowi Eksperci Handlu Online"
        // links={[
        //   <Link href="/agenda" label="presenters.list_full" variant="flat" color="secondary" />
        // ]}
        >
          <People random={false}  link={true}  filter={function(item){ return item.bio && item.bio.length >5; }}   />
        </Wrapper> */}

        {/* <Wrapper label="visitors.attendees">
          <WhoIsGonnaBeThere />
        </Wrapper> */}

        {/* <Wrapper>
          <Visitor />
        </Wrapper> */}

        {/* <Googlemap /> */}
      </Layout>
    );
  }
}

export default connect(
  null,
  null
)(PageAgenda);
