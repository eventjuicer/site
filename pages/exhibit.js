

import {
    connect,
    MyHead as Head,
    MyLink as Link,
    WidgetSalesMap,
    WidgetIconGrid,
    //WidgetVideoWithReviews,
    WidgetAllExhibitorsAvatarlist,
    //DatasourceExhibitors,
    WidgetVips,
    DatasourcePhotos,
    Wrapper,
    Gallery,
    Faq,
    // Avatarlist,
    // Typography,
    // WidthAwareInfo,
    // People,
    // GridBenefits
    reduxWrapper,
    configure
     
  } from 'eventjuicer-site-components';
  
  import settings from '../settings'
  
  const PageExhibit = () => (
  
   <>
  
    {/* <WidgetSalesMap
      label="exhibitors.map.title"
      secondaryLabel="exhibitors.map.opensales"
   
      first
    /> */}
  
    <WidgetIconGrid setting="exhibitors.benefits" />
  
    {/* <WidgetVideoWithReviews /> */}
  
    {/* <WidgetVips limit={12} mobile={4} /> */}
  
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
  
    <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" />
  
    {/* <DatasourcePhotos>
      {(photos, size) => (
        <Gallery data={photos} size={size} label="event.gallery" />
      )}
    </DatasourcePhotos> */}
  
  </>
  
  )
  
  
  
  export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {
  
    await configure(store, {
      settings : settings,
      preload : ['exhibitors', 'allexhibitors']
    })
  

    return {props: {}, revalidate: 1}
  
  })
  
  export default connect()(PageExhibit);
  