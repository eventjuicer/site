import dynamic from 'next/dynamic';

import { connect } from 'react-redux';
import Layout from '../layouts/main';

import {
  Wrapper,
  Avatarlist,
  Typography,
  Gallery,
  WidthAwareInfo,
  People,
  Faq,
  GridBenefits
} from '../components';

import {
  MyHead as Head,
  MyLink as Link
} from '../next';

import {Photos} from '../datasources'

const Bookingmap = dynamic(import('../components/Bookingmap/Bookingmap'));

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

        <Wrapper
          first
          label="exhibitors.map.title"
          secondaryLabel="exhibitors.map.opensales"
        >
          {/* <WidthAwareInfo /> */}
          <Bookingmap />
        </Wrapper>

        {/* <Wrapper
        label="exhibitors.list_full"

      //  dense={true}
      >
        <Avatarlist  data={ exhibitors } limit={null} />
      </Wrapper> */}


      <Wrapper>
        <GridBenefits />
      </Wrapper>


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



      <Photos>{
        (photos, size) => <Gallery data={photos} size={size} label="event.gallery" />
      }</Photos>

      </Layout>
    );
  }
}

export default connect()(PageExhibit);
