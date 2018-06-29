

import dynamic from 'next/dynamic'

import {
  MyHead as Head,
  MyLink as Link
} from '../next'

import reduxPage from '../redux'

import {get} from 'lodash'


import {
  MyTypography as Typography,
  Wrapper,
  Company,
  resourceFetchSuccess,
  Gallery,
  ColumnList,
  Avatarlist
} from '../components';


import Layout from '../layouts/main';

const CompanyBookingmap = dynamic(import('../components/CompanyBookingmap'))
const People = dynamic(import('../components/People'))
const Schedule = dynamic(import('../components/Schedule'))


/*USER REGISTRATION*/
import Visitor from '../roles/Visitor'
/*USER REGISTRATION*/


import {
  getCompanyAltOgImage,
  getCompanyProfileInfo,
  fetcher
} from '../helpers'


class PageCompany extends React.Component {


static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
{

  const company = `companies/${query.id}`
  const results = await fetcher({[company] : false, exhibitors : false}, store);

  return {
    company : results.getData(company),
    exhibitors : results.getData("exhibitors"),
    eventId: get(results.getMeta(company), "active_event_id")
  }

}

render()
{

  const { company, exhibitors, url , eventId} = this.props;

  return (<Layout>

    <Head
      image={ getCompanyAltOgImage(company, url.asPath)  }
      url={ url.asPath }
      titleLabel={["companies.opengraph.title", {name : getCompanyProfileInfo(company, "name") }]}
    />

    <Wrapper label="">
        <Company company={company} />
    </Wrapper>

    <CompanyBookingmap company={company} eventId={eventId} />

    <Wrapper label="visitors.register" color="#fafafa" links={[
         <Link key="more" href="/visit" label="visitors.more_info" variant="flat" color="secondary" />
      ]}>
      <Visitor  />
    </Wrapper>

    <Wrapper
      label="exhibitors.list_featured"
      secondaryTitle=""
      links={[
        <Link key="all" href="/exhibitors" label="common.menu.visitors.exhibitors" variant="flat" color="secondary" />,
      ]}
    >
      {/* <Avatarlist filter={function(item){ return item.featured; }} data={ exhibitors } /> */}

      <Avatarlist data={ exhibitors } />

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


    <Gallery label="event.gallery" />


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



  </Layout>)
}

}


export default reduxPage( PageCompany )
