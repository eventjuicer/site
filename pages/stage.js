import { MyHead as Head } from '../next';

import { connect } from 'react-redux';

import { Typography, Wrapper, Stage } from '../components';

import Layout from '../layouts/main';

class PageStage extends React.Component {
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
    return { stage: query.stage };
  }

  render() {
    const { url, stage } = this.props;

    return (
      <Layout>
        <Head />

        <Wrapper first label={`Scena ${stage.toUpperCase()}`}>
          <Stage stage={stage} />
        </Wrapper>
      </Layout>
    );
  }
}

export default connect()(PageStage);
