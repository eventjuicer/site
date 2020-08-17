import { MyHead as Head } from '../next';
import { connect } from 'react-redux';

import { 
  Typography 
} from '../components'

import {Presenters} from '../compositions'

import Layout from '../layouts/main';

class PageAgendaPreview extends React.Component {
  static async getInitialProps({
   
    query,
    asPath,
    isServer,
    store
  }) {
    return {
      preload : ["presenters"]
    };
  }

  render() {
    const { url } = this.props;

    return (
      <Layout>
        <Head />

        <Presenters limit={null} filter={null} />
    
      </Layout>
    );
  }
}

export default connect()(PageAgendaPreview);
