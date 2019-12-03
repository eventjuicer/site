import { connect } from 'react-redux';
//import Error from './_error';

import Layout from '../layouts/main';

import {
  Visitor,
  FeaturedExhibitors,
  Presenter,
  Schedule,
  RoleButtons,
  VideoWithEventInfo,
  Presenters,
  AllExhibitorsColumnList
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
       
        <Presenter id={speakerId } asPath={asPath} />

        <Visitor 
          label="visitors.register_alt"
        />

        {/* <Schedule /> */}

     <VideoWithEventInfo />


      {/* <Presenters filter={ function(item){ 
            
            return item.presentation_title.length > 20 && item.avatar.length > 10 && item.logotype.length > 10
          
          } } limit={24} mobile={4} 
          /> */}

        
        <RoleButtons />

             <Visitor 
          label="visitors.register"
        />

        <FeaturedExhibitors label="exhibitors.list_featured" /> 
        
      

        <AllExhibitorsColumnList />

        <Visitor 
          label="visitors.register"
        />
        
      </Layout>
    );
  }
}

export default connect()(PageSpeaker);
