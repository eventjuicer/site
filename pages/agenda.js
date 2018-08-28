import { MyHead as Head } from '../next';

import { connect } from 'react-redux';

import {
  Typography,
  Wrapper,
  //WhoIsGonnaBeThere,
  //Schedule,
  //Googlemap,
  //People
} from '../components';

import {Visitor} from '../compositions'

import Layout from '../layouts/main';

class PageAgenda extends React.Component {
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
    const { router } = this.props;

    return (
      <Layout>
        <Head />

         <Wrapper
          label="presenters.schedule"
          secondaryLabel="common.coming_soon"
          first
        >
          {/* <Schedule  /> */}
        </Wrapper> 

       <Visitor label="visitors.register_alt" />
 
        {/* <Wrapper first
          label="presenters.list_full"
          secondaryTitle="Czołowi Eksperci Handlu Online"
        // links={[
        //   <Link href="/agenda" label="presenters.list_full" variant="flat" color="secondary" />
        // ]}
        >
          <People random={false}  link={true}  filter={function(item){ return item.bio && item.bio.length >5; }}   />
        </Wrapper> */}

        {/* <Wrapper label="visitors.attendees">
          <WhoIsGonnaBeThere />
        </Wrapper> */}

        {/* <Wrapper>
          <Visitor />
        </Wrapper> */}

        {/* <Googlemap /> */}
      </Layout>
    );
  }
}

export default connect(
  null,
  null
)(PageAgenda);
