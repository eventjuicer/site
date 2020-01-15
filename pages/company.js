import dynamic from 'next/dynamic';
import { MyLink as Link } from '../next';
import { connect } from 'react-redux';

import {
//  MyTypography as Typography,
  Wrapper,
//  ColumnList,
  Avatarlist,
  //MeetupsButton
} from '../components';

import {
  VideoWithEventInfo,
  Visitor, 
  Company, 
 // AllExhibitorsColumnList, 
  SalesMap,
  RoleButtons,
 // Presenters,
  Schedule,
//VisitorStepForm,
  PresentersFeatured
} from '../compositions'
import Layout from '../layouts/main';

class PageCompany extends React.Component {

  static async getInitialProps({
    query,
    asPath,
    isServer,
    store
  }) {
    const company = `companies/${query.id}`;

    return {
      asPath: asPath,
      preload : [company, "exhibitors", "bookingmap"],
      company_id : query.id
    };
  }

  render() {

    const { company_id, exhibitors, asPath } = this.props;

    return (

      <Layout>

        {/* <MeetupsButton 
          company_id={company_id} 
          register={ <VisitorStepForm /> }
          /> */}

        <Company id={company_id} asPath={asPath} />

     <Visitor />

   {/* <Schedule /> */}

<SalesMap

label="exhibitors.map.title"
secondaryLabel="exhibitors.map.opensales"
// disabled={true}
/>
  

      {/* <Visitor /> */}

  <VideoWithEventInfo />

        <RoleButtons />
    
      {/* <PresentersFeatured /> */}

        {/* <Visitor /> */}


        {/* <Presenters filter={ function(item){ 
          
          return item.presentation_title.length > 20 && item.avatar.length > 10 && item.logotype.length > 10

        } } limit={16} mobile={4} /> */}

        {/* 
      

        <RoleButtons />

        <AllExhibitorsColumnList /> */}
    
      </Layout>
    );
  }
}

export default connect()(PageCompany);
