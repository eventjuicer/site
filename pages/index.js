import React from 'react'

import {
    connect,
    WidgetVideoWithEventInfo,
    // WidgetFeaturedCompanies,
    // WidgetAllExhibitorsColumnList,
    WidgetRoleButtons,
    WidgetRegForm,
    reduxWrapper,
    configure,
    WidgetFeaturedPresenters,
    WidgetSchedule,
    MyHead
  } from 'eventjuicer-site-components';
  
  import Head from 'next/head'

  
  import settings from '../settings'
  
  
  const PageIndex = (props) => (
  
     
    <React.Fragment>
  
    <MyHead 
      image="https://res.cloudinary.com/eventjuicer/image/upload/f_auto/v1615494821/tehonline.jpg" 
      titleLabel="virtual.opengraph.name" 
      descriptionLabel="virtual.opengraph.description"
    >{(data)=><Head>{data}</Head>}</MyHead>

    <WidgetVideoWithEventInfo setting="heroStreaming" />


   <WidgetRegForm
      setting="streaming_registration"
      wrapperProps={{ 
        label:"virtual.register.title",
        secondaryLabel: null
      }}
      legend="streaming.how_to_register"
    />
  
    <WidgetSchedule 
      wrapperProps={{
        label: "virtual.schedule.title", 
        secondaryLabel: "virtual.schedule.description"
      }}
    />

    <WidgetFeaturedPresenters 
      setting="featured_presenters" 
    />
  
    <WidgetRoleButtons 
      setting="rolebuttonsVirtual" 
    />

    </React.Fragment>
   
  ) 
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings: settings,
      preload: ['allexhibitors', 'companies', 'presenters']
    })
    
  })
  
  export default connect()(PageIndex);
  