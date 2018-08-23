import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import Layout from '../layouts/main';

import {
  Wrapper,
  ColumnList,
  //  Bookingmap,
  Gallery
} from '../components';

import { MyHead as Head, MyLink as Link } from '../next';

import {Visitor} from '../compositions'


const Bookingmap = dynamic(import('../components/Bookingmap/Bookingmap'));

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

        <Wrapper
          first
          label="visitors.register"
          secondaryTitle="Spotkamy się w gronie ponad 3000 osób!"
          //   links={[
          //   <Link key="more" href="/visit" label="visitors.more_info" variant="flat" color="secondary" />
          // ]}
        >
          <Visitor />
        </Wrapper>

        <Wrapper label="exhibitors.list_full" color="#ffffff">
          <ColumnList data={exhibitors} />
        </Wrapper>
      </Layout>
    );
  }
}

export default connect()(PageSpecials);
