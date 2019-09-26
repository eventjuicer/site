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

import {
  Visitor, 
  Presenters, 
  Schedule,
  VideoWithEventInfo
} from '../compositions'

class PagePresenters extends React.Component {
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

        <Presenters first limit={null}  />
       
        <Visitor label="visitors.register_alt" />
        
        <VideoWithEventInfo />

        {/* <Schedule /> */}

       <Visitor label="visitors.register" />

        {/* <Wrapper label="visitors.attendees">
          <WhoIsGonnaBeThere />
        </Wrapper> */}


      </Layout>
    );
  }
}

export default connect()(PagePresenters);
