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

import {Visitor, Presenters, Schedule} from '../compositions'

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

       <Presenters first />
       
        <Visitor label="visitors.register_alt" />
        
        <Schedule />

       <Visitor label="visitors.register" />

        {/* <Wrapper label="visitors.attendees">
          <WhoIsGonnaBeThere />
        </Wrapper> */}


      </Layout>
    );
  }
}

export default connect()(PagePresenters);
