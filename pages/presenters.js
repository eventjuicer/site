import { MyHead as Head } from '../next';

import { connect } from 'react-redux';

import {
  Typography,
  Wrapper,
  //WhoIsGonnaBeThere,
  //  Googlemap,
 // People
} from '../components';

import Layout from '../layouts/main';

import {Visitor} from '../compositions'

class PagePresenters extends React.Component {
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

        <Wrapper
        first
        label="presenters.tba"
    //    secondaryTitle="Expo start 10:00, Prezentacje start 11:15, Wstęp BEZPŁATNY (wymagana rejestracja)"
     
      >
        {/* <People link={true} random={false} filter={function(item){ return item.bio && item.bio.length >5; }}   /> */}
      </Wrapper>

        
        <Visitor label="visitors.register_alt" />
        

        {/* <Wrapper label="visitors.attendees">
          <WhoIsGonnaBeThere />
        </Wrapper> */}


      </Layout>
    );
  }
}

export default connect()(PagePresenters);
