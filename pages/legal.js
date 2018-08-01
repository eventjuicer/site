import _get from 'lodash/get';

import { MyHead as Head } from '../next';
import { connect } from 'react-redux';

import { Typography, Faq, FaqLink, Wrapper } from '../components';

import Layout from '../layouts/main';

class PageFaq extends React.Component {
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
        <Wrapper label="exhibitors.agreement">
          {/* <FaqLink url={url} /> */}

          {/* <Faq url={url} baseLabel="exhibitors.faq.agreement" items={[

          {label : "payment"},
          {label : "resignation"},
          {label : "standard_offering"},
      ]} /> */}
        </Wrapper>
      </Layout>
    );
  }
}

export default connect()(PageFaq);
