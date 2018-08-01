import { MyHead as Head } from '../next';
import { connect } from 'react-redux';

import {
  Wrapper,
  WhoIsGonnaBeThere,
  People,
  Schedule,
  //Googlemap,
  Gallery
} from '../components';

import Layout from '../layouts/main';
import Visitor from '../roles/Visitor';

import { fetcher } from '../helpers';

class PageVisit extends React.Component {
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

    return {
      exhibitors: results.getData('exhibitors'),
      presenters: results.getData('presenters')
    };
  }

  render() {
    const { url } = this.props;

    return (
      <Layout>
        <Head />

        <Wrapper label="visitors.register_alt" first>
          <Visitor />
        </Wrapper>

        {/* <Wrapper
        label="presenters.schedule"
        secondaryTitle="Expo start 10:00, Prezentacje start 11:15, Wstęp BEZPŁATNY (wymagana rejestracja)"
        first
      >

        <Schedule  />
      </Wrapper> */}

        {/* <Wrapper
        label="visitors.attendees"
        secondaryTitle="oraz 3000 innych osób"
      >
        <WhoIsGonnaBeThere />
      </Wrapper> */}

        {/* <Wrapper label="visitors.register">
        <Visitor />
      </Wrapper>

      <Wrapper
        label="presenters.list_featured"
        secondaryTitle="22 Prezentacje, 2 panele dyskusyjne! Udział bezpłatny."
      >
        <People limit={16} link={true} random={false} filter={function(item){ return item.bio.length > 10 }}  />
      </Wrapper> */}

        <Gallery />

        {/* <Googlemap /> */}
      </Layout>
    );
  }
}

export default connect()(PageVisit);
