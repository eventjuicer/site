import React from 'react'

import {
    connect,
    reduxWrapper,
    configure,

    WidgetSalesMap,
    WidgetIconGrid,
    WidgetVideoWithEventInfo,
    //WidgetAllExhibitorsAvatarlist,
    WidgetFeaturedCompanies,
    WidgetAllExhibitorsColumnList,
    Wrapper,
    Faq
  } from 'eventjuicer-site-components';
  
  import settings from '../settings'
  
  const PageExhibit = () => (
  
   <>

    <WidgetVideoWithEventInfo setting="heroExpo" />

    <WidgetSalesMap
      label="exhibitors.map.title"
      secondaryLabel="exhibitors.map.opensales"
    />

    <WidgetFeaturedCompanies />

    <WidgetIconGrid setting="exhibitors.benefits" />
  
    <Wrapper label="exhibitors.faq.name">
      <Faq
        baseLabel="exhibitors.faq.become"
        items={[
          {
            label: 'included_services',
            important: true,
            buttons: [],
          },
          {
            baseLabel: 'exhibitors.faq.before_event',
            label: 'additional_paid_services',
          },
          { label: 'payment' },
          { label: 'onboarding' },
          { label: 'resignation' },
          { label: 'promo_benefits' },
          {
            baseLabel: 'exhibitors.faq.before_event',
            label: 'public_profile',
          },
        ]}
      />
    </Wrapper>
  
    {/* <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" /> */}
  
    <WidgetAllExhibitorsColumnList />
  
  </>
  
  )
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings : settings,
      preload : ['exhibitors', 'allexhibitors']
    })
  
  })
  
  export default connect()(PageExhibit);
