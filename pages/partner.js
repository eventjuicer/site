import { MyHead as Head } from '../next';
import { connect } from 'react-redux';

import {
  Typography,
  Wrapper,
  WhoIsGonnaBeThere,
  Googlemap
} from '../components';

import Layout from '../layouts/main';
import {Visitor} from '../compositions'

class Partner extends React.Component {
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
    return (
      <Layout>
        <Head />

        <Wrapper label="visitors.register_alt">
          <Visitor />
        </Wrapper>

        <Wrapper label="visitors.attendees">
          <WhoIsGonnaBeThere />
        </Wrapper>

        <Wrapper>
          <Visitor />
        </Wrapper>

        <Googlemap />
      </Layout>
    );
  }
}

export default connect()(Partner);
