import dynamic from 'next/dynamic';
import { MyLink as Link } from '../next';
import { connect } from 'react-redux';

import {
//  MyTypography as Typography,
  Wrapper,
//  ColumnList,
  Avatarlist
} from '../components';

import {
  VideoWithEventInfo,
  Visitor, 
  Company, 
  FeaturedExhibitors, 
  SalesMap,
  RoleButtons,
  Presenters
} from '../compositions'
import Layout from '../layouts/main';

const People = dynamic(import('../components/People'));
const Schedule = dynamic(import('../components/Schedule'));

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

        <Company id={company_id} asPath={asPath} />
        
        <RoleButtons />

        <Visitor   
          label="visitors.register"
          links={[
            <Link
              key="more"
              href="/visit"
              label="visitors.more_info"
              variant="flat"
              color="secondary"
            />
        ]}/>

      <Presenters />

     <SalesMap  label="exhibitors.map.title2" />

      
      <FeaturedExhibitors 
      label="exhibitors.list_featured"
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



        {/*
    <Wrapper
      label="presenters.schedule"
      secondaryTitle="Expo start 10:00, Prezentacje start 11:15, Wstęp BEZPŁATNY (wymagana rejestracja)"
      first
    >
      <Schedule  />
    </Wrapper>
 */}

        {/* <Wrapper
      label="presenters.list_featured"
      secondaryTitle="Udział bezpłatny. Pełna agenda już wkrótce..."
      links={[
        <Link key="more" href="/agenda" label="presenters.list_full" variant="flat" color="secondary" />
      ]}
    >
      <People link={true} limit={8} random={false} filter={function(item){ return [71460, 71462, 71461, 71463, 71703, 71707, 71708, 71709].indexOf(item.id) > -1; }}  />
    </Wrapper>
 */}


  <VideoWithEventInfo />


        {/*
  <Wrapper label="visitors.register_alt" color="#ffffff" links={[
     <Link key="more" href="/visit" label="visitors.more_info" variant="flat" color="secondary" />
  ]}>
    <Visitor  />
  </Wrapper>
 */}

        {/* <Wrapper label="exhibitors.list_full" color="#ffffff">
      <ColumnList data={ exhibitors } />
    </Wrapper> */}
      </Layout>
    );
  }
}

export default connect()(PageCompany);
