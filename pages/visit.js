import React from 'react'

import {
    connect,
    reduxWrapper,
    configure,
    WidgetVideoWithEventInfo
  } from 'eventjuicer-site-components';
  
  //import FeaturedPresenters from '../src/FeaturedPresenters';
  
  import settings from '../settings'
  
  const PageVisit = () => (
  
          <div>
        
         <WidgetVideoWithEventInfo setting="heroExpo" />

          {/* <WidgetVisitor label="visitors.register_alt" first /> */}
  
          {/* <WidgetSchedule /> */}
  
          {/* <WidgetFeaturedPresenters /> */}
  
          {/* <WidgetVips limit={12} mobile={4} /> */}

  
          {/* <WidgetPresenters /> */}
  
          {/* <WidgetIconGrid setting="visitor.benefits" /> */}
  
          {/* <WidgetVisitor label="visitors.register" /> */}
  
          {/* <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" /> */}
  
          {/* <WidgetVisitor label="visitors.register" first /> */}

    
          </div>
  
  )
  
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings : settings,
      preload : ["exhibitors", 'presenters']
    })
  
  })
  
   
  export default connect()(PageVisit);
  