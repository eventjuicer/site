import {
    connect,
    WidgetVideoWithEventInfo,
    WidgetVisitor,
    WidgetFeaturedCompanies,
    WidgetAllExhibitorsColumnList,
    WidgetRoleButtons,
    WidgetSalesMap,
    reduxWrapper,
    configure,
    WidgetFeaturedPresenters
  } from 'eventjuicer-site-components';
  
  // import FeaturedExhibitors from '../src/FeaturedExhibitors';
  //import FeaturedPresenters from '../src/FeaturedPresenters';
  
  import settings from '../settings'
  
  
  const PageIndex = (props) => (
  
     
    <React.Fragment>
  
    <WidgetVideoWithEventInfo />

     {/* <WidgetSalesMap
      label="exhibitors.map.title"
      // secondaryLabel="exhibitors.map.opensales"
      // first
    /> */}
  
    {/* <WidgetSchedule /> */}

    {/* <WidgetFeaturedPresenters /> */}
  
    {/* <WidgetVisitor
      label="visitors.register"
      secondaryLabel="event.parties"
    /> */}
  
    <WidgetFeaturedCompanies />
  
    {/* <WidgetSalesMap
      label="exhibitors.map.title2"
      secondaryLabel="exhibitors.map.opensales"
    /> */}
  
    {/* <WidgetPresentersAll /> */}
  
    {/* <WidgetRoleButtons first={true} /> */}
  
    {/* <FeaturedExhibitors /> */}
  
    {/* <WidgetVisitor
      label="visitors.register_alt"
      secondaryLabel="event.parties"
    /> */}
  
    {/* <WidgetVideoWithReviews overlay="black" /> */}
  
    <WidgetAllExhibitorsColumnList />
  
    {/* <FsVideo
      background="https://res.cloudinary.com/eventjuicer/image/upload/v1534553598/poster_stage1.jpg"
      videoSrc="https://res.cloudinary.com/eventjuicer/video/upload/v1534553583/video_stage1.mp4"
    /> */}
  
    {/* <WidgetVisitor
      label="visitors.register"
      secondaryLabel="event.parties"
    /> */}
  
   
   
    </React.Fragment>
   
  ) 
  
  export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {
  
    await configure(store, {
      settings: settings,
      preload: ['allexhibitors', 'companies', 'presenters']
    })

    return {props: {
      
    }, revalidate: 10}
    
  })
  
  export default connect()(PageIndex);
  