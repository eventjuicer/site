import { connect } from 'react-redux';
//import Error from './_error';

import Layout from '../layouts/main';

import {
  Visitor,
  FeaturedExhibitors,
  Presenter,
  Presenters
} from '../compositions'




class PageSpeaker extends React.Component {
  static async getInitialProps({
  
    query,
    asPath,
    isServer,
    store
  }) {

    return {
      preload : ["presenters", "exhibitors"],
      asPath: asPath,
      speakerId: query.id
    };
  }

  render() {
    const { speakerId, asPath } = this.props;


    // if (!speaker) {
    //   return <Error statusCode={404} />;
    // }

    return (
      <Layout>
       

        <Presenter id={speakerId }/>

        <Presenters />
        
        <Visitor 
          label="visitors.register_alt"
          // links={[
          //   <Link
          //     key="more"
          //     href="/visit"
          //     label="visitors.more_info"
          //     variant="flat"
          //     color="secondary"
          //   />
          // ]}
        />

        <FeaturedExhibitors label="exhibitors.list_featured" /> 
     
        {/* <Wrapper
          label="presenters.schedule"
          secondaryTitle="Expo start 10:00, Prezentacje start 11:15, Wstęp BEZPŁATNY (wymagana rejestracja)"
          first
        >
          <Schedule selected={speaker.id} />
        </Wrapper> */}
        
      
      </Layout>
    );
  }
}

export default connect()(PageSpeaker);
