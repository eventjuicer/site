import {
    connect,
    WidgetVisitor,
    WidgetFeaturedExhibitors,
    WidgetPresenter,
    WidgetSchedule,
    WidgetVideoWithEventInfo,
    WidgetRoleButtons,
    reduxWrapper,
    configure
  } from 'eventjuicer-site-components';
  
  const settings = require('../settings').default;


  const PageSchedule = () => (

    <>

    <WidgetSchedule />

    <WidgetVideoWithEventInfo />

    {/* <WidgetVisitor label="visitors.register_alt" />

    <WidgetRoleButtons />

    <WidgetFeaturedExhibitors label="exhibitors.list_featured" /> */}
  </>
  )


  
export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {


    await configure(props, {
      settings : settings,
      preload : ["presenters"]
    })

    return {
      revalidate : 10
    }
  
  })
  
  
export default connect()(PageSchedule);
  