import dynamic from 'next/dynamic';

import { MyHead as Head, MyLink as Link } from '../next';

import { get } from 'lodash';

import { connect } from 'react-redux';

import {
  MyTypography as Typography,
  Wrapper,
  Company,
  resourceFetchSuccess,
  Gallery,
  ColumnList,
  Avatarlist
} from '../components';

import {Visitor} from '../compositions'

import Layout from '../layouts/main';

const CompanyBookingmap = dynamic(import('../compositions/CompanyBookingmap'));
const People = dynamic(import('../components/People'));
const Schedule = dynamic(import('../components/Schedule'));


import {
  getCompanyAltOgImage,
  getCompanyProfileInfo,
  fetcher
} from '../helpers';


import { SingleRecord, Exhibitors, Photos } from "../datasources"

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

        <SingleRecord endpoint="companies" id={company_id}>
          {
          (company) =>
          <React.Fragment>
          <Head
              image={getCompanyAltOgImage(company, asPath)}
              url={asPath}
              titleLabel={[
                'companies.opengraph.title',
                { name: getCompanyProfileInfo(company, 'name') }
              ]}
            />

            <Wrapper label="">
              <Company company={company} />
            </Wrapper>

            <CompanyBookingmap company={company} />
            </React.Fragment>
        }
        </SingleRecord>



        <Wrapper
          label="visitors.register"
          color="#fafafa"
          links={[
            <Link
              key="more"
              href="/visit"
              label="visitors.more_info"
              variant="flat"
              color="secondary"
            />
          ]}
        >
          <Visitor />
        </Wrapper>

        <Wrapper
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
        >
          {/* <Avatarlist filter={function(item){ return item.featured; }} data={ exhibitors } /> */}
          <Exhibitors mobile={8}>{
            (exhibitors) => <Avatarlist data={exhibitors} />
          }</Exhibitors>

        </Wrapper>

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


  <Photos>{
    (photos, size) => <Gallery data={photos} size={size} label="event.gallery" />
 }</Photos>


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
