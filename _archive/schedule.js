import { MyHead as Head } from '../next';
import { connect } from 'react-redux';

import {
  Typography,
  Wrapper,
  // WhoIsGonnaBeThere
} from '../components';

import Layout from '../layouts/main';

import {
  Visitor, 
  Presenters, 
  Schedule,
  VideoWithEventInfo
} from '../compositions'

class PageSchedule extends React.Component {
  static async getInitialProps({
    query,
    asPath,
    isServer,
    store
  }) {
    return {
      preload : ["presenters"]
    }
  }

  render() {
    const { url } = this.props;

    return (
      <Layout>

        <Head />

        {/* <Schedule first /> */}

        <Visitor label="visitors.register_alt" />

      
        {/* <Presenters /> */}

         <VideoWithEventInfo />
     
        <Visitor label="visitors.register" />

     
        {/* 
        <Wrapper label="visitors.attendees">
          <WhoIsGonnaBeThere />
         </Wrapper> 
        */}

      </Layout>
    );
  }
}

export default connect()(PageSchedule);
