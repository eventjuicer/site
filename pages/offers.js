import { connect } from 'react-redux';
import Layout from '../layouts/main';

import {
  Wrapper,
  ColumnList,
  //  Bookingmap,
//  Gallery
} from '../components';

import { MyHead as Head, MyLink as Link } from '../next';

import {
  Visitor, 
  Offers,
  RoleButtons
} from '../compositions'
import {Offers as OfferDatasource} from '../datasources'

class PageSpecials extends React.Component {
  static async getInitialProps({

    query,
    asPath,
    isServer,
    store
  }) {

    return { preload : ["exhibitors"]  };
  }

  render() {
    const { url } = this.props;

    return (
      <Layout>
        <Head />

        <Offers divider={

          <Visitor 
          first
          label="visitors.register_alt"
          secondaryTitle="Spotkamy się w gronie ponad 3000 osób!"
          />

        } />

        <Visitor 
           first
           label="visitors.register"
           secondaryTitle="Spotkamy się w gronie ponad 3000 osób!"
          />

        <RoleButtons />
       
      </Layout>
    );
  }
}

export default connect()(PageSpecials);
