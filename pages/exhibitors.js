import dynamic from 'next/dynamic';
import { MyHead as Head, MyLink as Link } from '../next';

import { connect } from 'react-redux';

import Layout from '../layouts/main';

import {
  Wrapper,
  Bookingmap,
  Typography,
  Gallery
} from '../components';

//const Gallery = dynamic(import('../components/GalleryQuoted'))
import {
  Visitor, 
  RoleButtons,
  AllExhibitorsAvatarlist} from '../compositions'

import {Exhibitors} from '../datasources'

class PageExhibitors extends React.Component {
  static async getInitialProps({
    query,
    asPath,
    isServer,
    store
  }) {

    return {
      preload : ["exhibitors", "bookingmap"]
    };
  }

  render() {
    const { exhibitors, booths } = this.props;

    return (

      <Layout>

        <Head />

        <AllExhibitorsAvatarlist label="exhibitors.list_full" first />

        <Wrapper label="exhibitors.map.title">
          {/* <h1>SCROLL </h1> */}
          <Bookingmap />
        </Wrapper>


        <RoleButtons />

        <Visitor label="visitors.register" />
       
      </Layout>
    );
  }
}

export default connect()(PageExhibitors);
