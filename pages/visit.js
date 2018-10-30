import { MyHead as Head } from '../next';
import { connect } from 'react-redux';

import {
  Wrapper,
  WhoIsGonnaBeThere,
  //Googlemap,
  Gallery
} from '../components';

import {
  VideoWithEventInfo,
  Visitor,
  VisitorBenefits,
  Presenters,
  Schedule,
  AllExhibitorsAvatarlist
} from '../compositions';

import Layout from '../layouts/main';

import {Photos} from '../datasources';

class PageVisit extends React.Component {

  static async getInitialProps({

    query,
    asPath,
    isServer,
    store
  }) {

    return {
      preload : ["exhibitors", "presenters"]
    };
  }

  render() {
    const { url } = this.props;

    return (
      
      <Layout>

        <Head />

        <Visitor 
          label="visitors.register_alt" 
          first 
        />


        <Presenters />

         <VideoWithEventInfo />


       <Visitor 
          label="visitors.register" 
          first 
        />

        <Schedule />

        <VisitorBenefits 
          label="visitors.benefits.title" 
        />


         <AllExhibitorsAvatarlist label="exhibitors.list_full" />


        {/* <Wrapper
        label="presenters.schedule"
        secondaryTitle="Expo start 10:00, Prezentacje start 11:15, Wstęp BEZPŁATNY (wymagana rejestracja)"
        first
      >

        <Schedule  />
      </Wrapper> */}

        {/* <Wrapper
        label="visitors.attendees"
        secondaryTitle="oraz 3000 innych osób"
      >
        <WhoIsGonnaBeThere />
      </Wrapper> */}

        {/* <Wrapper label="visitors.register">
        <Visitor />
      </Wrapper>

 */}


        <Visitor 
          label="visitors.register" 
          first 
        />


      <Photos>{
        (photos, size) => <Gallery data={photos} size={size} label="event.gallery" />
      }</Photos>

        {/* <Googlemap /> */}
      </Layout>
    );
  }
}

export default connect()(PageVisit);
