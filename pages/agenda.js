import { MyHead as Head } from '../next';

import { connect } from 'react-redux';

import {
  Typography,
  Wrapper,
  //WhoIsGonnaBeThere,
  Schedule,
  //Googlemap,
  //People
} from '../components';

import {Visitor, Presenters} from '../compositions'

import Layout from '../layouts/main';

class PageAgenda extends React.Component {
  static async getInitialProps({
  
    query,
    asPath,
    isServer,
    store
  }) {
  
    return {
      preload : ["exhibitors", "presenters"]
    };
  }

  render() {
    const { router } = this.props;

    return (
      <Layout>
        <Head />

        <Schedule first />
      
        <Presenters filter={ function(item){ return item.bio.length > 20} } limit={16} mobile={4}  />


       <Visitor label="visitors.register_alt" />
 
    
      </Layout>
    );
  }
}

export default connect(
  null,
  null
)(PageAgenda);
