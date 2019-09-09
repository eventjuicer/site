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
  SalesMap,
  AllPastExhibitorsAvatarlist
} from '../compositions'

import {Exhibitors} from '../datasources'

class PageExhibitors extends React.Component {
  static async getInitialProps({
    query,
    asPath,
    isServer,
    store
  }) {

    return {
      preload : ["allexhibitors", "bookingmap"]
    };
  }

  render() {
    const { exhibitors, booths } = this.props;

    return (

      <Layout>

        <Head />

        <AllPastExhibitorsAvatarlist label="exhibitors.list_full" first />

    <SalesMap
      
      label="exhibitors.map.title2"
      secondaryLabel="exhibitors.map.opensales"
      // disabled={true}
      disabledTicketIds={[1562,1566,1557,1570,1574,1578,1563,1567,1571,1579,1575,1581]}

    />

       
        {/* <RoleButtons /> */}

        <Visitor label="visitors.are_you_visitor" />
       
      </Layout>
    );
  }
}

export default connect()(PageExhibitors);
