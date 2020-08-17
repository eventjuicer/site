import { MyHead as Head } from '../next';

import { connect } from 'react-redux';

import { Typography, Wrapper, Stage } from '../components';

import {LayoutPdf as Layout} from '../layouts';

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
        <div style={{backgroundColor : "#fff"}}>
          <Stage stage={stage} enlarge={true} />
        </div>

      
      </Layout>
    );
  }
}

export default connect()(PageStage);
