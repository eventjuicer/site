import { MyHead as Head } from '../next';
import { connect } from 'react-redux';

import {
  Gallery
} from '../components';

import {
  VideoWithEventInfo,
  Speaking,
  SpeakerBenefits
} from '../compositions';

import Layout from '../layouts/main';

import {Photos} from '../datasources';

class PageSpeaking extends React.Component {

  static async getInitialProps({

    query,
    asPath,
    isServer,
    store
  }) {

    return {
  //    preload : ["exhibitors", "presenters"]
    };
  }

  render() {
    const { url } = this.props;

    return (
      
      <Layout>

        <Head />

        <Speaking 
          first 
        />


        <SpeakerBenefits 
          label="presenters.steps.title" 
        />

        <VideoWithEventInfo 
        //  background="https://res.cloudinary.com/eventjuicer/image/upload/v1552428524/teh_presenters_video.png" 
        //  showEventDetails={false}
        //  videoSrc="https://res.cloudinary.com/eventjuicer/video/upload/v1552428525/teh_presenters_video.mp4" 
          title="presenters.claim.title"
          subtitle="presenters.claim.description"
        />


      <Photos>{
        (photos, size) => <Gallery data={photos} size={size} label="event.gallery" />
      }</Photos>

      
      </Layout>
    );
  }
}

export default connect()(PageSpeaking);
