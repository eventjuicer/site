import { connect } from 'react-redux';
import Layout from '../layouts/main';

import {
  Wrapper,
//  Avatarlist,
//  Typography,
  Gallery,
//  WidthAwareInfo,
//  People,
  Faq,
 // GridBenefits
} from '../components';

import {
  MyHead as Head,
  MyLink as Link
} from '../next';

import { Photos } from '../datasources'

import {
  SalesMap, 
  ExhibitorBenefits, 
  VideoWithReviews,
  FeaturedExhibitors,
//  AllExhibitorsAvatarlist
} from '../compositions'


class PageExhibit extends React.Component {
  static async getInitialProps({

    query,
    asPath,
    isServer,
    store
  }) {

    return { preload : ["exhibitors"] };
  }

  render() {

    const { url } = this.props;

    return (
      <Layout>
        <Head />

    
  <SalesMap
        first
        label="exhibitors.map.title"
        secondaryLabel="exhibitors.map.opensales"
        // disabled={true}

  />
  

  <FeaturedExhibitors

label="exhibitors.list_featured"
secondaryTitle=""
links={[
    <Link
    key="all"
    href="/exhibitors"
    label="common.menu.visitors.exhibitors"
    variant="flat"
    color="secondary"
    />
]}

/>


     <ExhibitorBenefits first label="exhibitors.benefits.title" />

   
      <VideoWithReviews />

      <Wrapper label="exhibitors.faq.name">

        <Faq
          url={url}
          baseLabel="exhibitors.faq.become"
          items={[
            {
              label: 'included_services',
              important: true,
              buttons: []
            },
            { baseLabel : 'exhibitors.faq.before_event',
              label: 'additional_paid_services'
            },
            { label: 'payment' },
            { label: 'onboarding' },
            { label: 'resignation' },
            { label: 'promo_benefits' },
            {
              baseLabel : 'exhibitors.faq.before_event',
              label: 'public_profile'
            }
          ]}
        />


      </Wrapper>

      {/* <AllExhibitorsAvatarlist label="exhibitors.list_full" /> */}
        

      <Photos>{
        (photos, size) => <Gallery data={photos} size={size} label="event.gallery" />
      }</Photos>


  {/* <SalesMap
          
          label="exhibitors.map.title"
          secondaryLabel="exhibitors.map.opensales"
          // disabled={true}

    /> */}


      </Layout>
    );
  }
}

export default connect()(PageExhibit);
