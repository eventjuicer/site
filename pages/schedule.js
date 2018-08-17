import { MyHead as Head } from '../next';

import { connect } from 'react-redux';

import {
  Typography,
  Wrapper,
  WhoIsGonnaBeThere,
  //  Googlemap,
  Schedule
} from '../components';

import Layout from '../layouts/main';

import Visitor from '../roles/Visitor';

class PageSchedule extends React.Component {
  static async getInitialProps({


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
      label="presenters.schedule"
      secondaryTitle="Expo start 10:00, Prezentacje start 11:15, Wstęp BEZPŁATNY (wymagana rejestracja)"
    >
      <Schedule  />

    </Wrapper> */}

        <Wrapper label="visitors.register_alt">
          <Visitor />
        </Wrapper>

        {/* <Wrapper label="visitors.attendees">

      <WhoIsGonnaBeThere />

    </Wrapper> */}

      </Layout>
    );
  }
}

export default connect()(PageSchedule);
