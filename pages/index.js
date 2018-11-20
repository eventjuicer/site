import dynamic from 'next/dynamic';
import { connect } from 'react-redux';


import {
  LayoutMain as Layout,
  MyHead as Head, 
  MyLink as Link,
  Wrapper,
  ColumnList,
 // Gallery,

  WidgetFsVideo,
  WidgetVideoWithEventInfo,
  WidgetVideoWithReviews,
  WidgetVisitor,
  WidgetFeaturedExhibitors,
  WidgetAllExhibitorsColumnList,
  WidgetRoleButtons,
  WidgetSalesMap,
  WidgetPresenters,
  WidgetSchedule,
  WidgetExhibitors

} from 'eventjuicer-site-components'


class PageIndex extends React.Component {

  static async getInitialProps({
    query,
    isServer,
    store
  }) {
    return {
    //  preload : ["exhibitors"],
  //    load : ["bookingmap", "formdata", "ticketgroups"]
    }
  }

  render() {

  return <div>test</div> 

  }
}

export default connect(null, null)(PageIndex);
