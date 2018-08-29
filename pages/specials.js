import { connect } from 'react-redux';
import Layout from '../layouts/main';

import {
  Wrapper,
  ColumnList,
  //  Bookingmap,
//  Gallery
} from '../components';

import { MyHead as Head, MyLink as Link } from '../next';

import {Visitor} from '../compositions'
import {Exhibitors} from '../datasources'

class PageSpecials extends React.Component {
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

    return { preload : ["exhibitors"]  };
  }

  render() {
    const { url } = this.props;

    return (
      <Layout>
        <Head />

       <Visitor 
           first
           label="visitors.register"
           secondaryTitle="Spotkamy się w gronie ponad 3000 osób!"
          />

   <Wrapper label="exhibitors.list_full" color="#ffffff">

<Exhibitors columns={true}>
  {(exhibitors) => <ColumnList data={exhibitors} /> }
</Exhibitors>

</Wrapper>


       
      </Layout>
    );
  }
}

export default connect()(PageSpecials);
