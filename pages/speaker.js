import { connect } from 'react-redux';
//import Error from './_error';

import Layout from '../layouts/main';

import {
  Visitor,
  FeaturedExhibitors,
  Presenter,
  Schedule,
  RoleButtons,
  VideoWithEventInfo
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

    console.log(speakerId);

    // if (!speaker) {
    //   return <Error statusCode={404} />;
    // }

    return (
      <Layout>
       

        <Presenter id={speakerId }/>

        <Schedule />
        
        <VideoWithEventInfo />

        <Visitor 
          label="visitors.register_alt"
        />


        <RoleButtons />

        <FeaturedExhibitors label="exhibitors.list_featured" /> 
     
      </Layout>
    );
  }
}

export default connect()(PageSpeaker);
