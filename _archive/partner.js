import { MyHead as Head } from '../next';
import { connect } from 'react-redux';

import {

//  Googlemap
} from '../components';

import Layout from '../layouts/main';
import {Visitor} from '../compositions'

class Partner extends React.Component {
  static async getInitialProps({
   
    query,
    asPath,
    isServer,
    store
  }) {
    return {};
  }

  render() {
    return (
      <Layout>
        <Head />

        <Visitor label="visitors.register_alt" />
        

      </Layout>
    );
  }
}

export default connect()(Partner);
