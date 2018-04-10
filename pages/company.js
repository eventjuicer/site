

import dynamic from 'next/dynamic'

import {
  MyHead as Head,
  MyLink as Link
} from '../next'

import reduxPage from '../redux'


import _get from 'lodash/get'
import _map from 'lodash/map'


import {
  MyTypography as Typography,
  TwoColsLayout as Section,
  Wrapper,
  Company as CompanyProfile,
  resourceFetchSuccess,
  Tags
} from '../components';


import Layout from '../layouts/main';

const Bookingmap = dynamic(import('../components/Bookingmap'))


/*USER REGISTRATION*/
import Visitor from '../roles/Visitor'
/*USER REGISTRATION*/


import {
  filterCompanyInstances,
  stripTags,
  escapeHtml,
  getCompanyLogotype,
  getCompanyAltOgImage
} from '../helpers'


// TabContainer.propTypes = {
// //  children: PropTypes.node.isRequired,
// };

class Company extends React.Component {


static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
{

  const _company = await fetch(`https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/companies/${query.id}`)
  const company = await _company.json()


  // store.dispatch(
  //   resourceFetchSuccess("bookingmap", bookingmap.data)
  // )

  return {
    company : company.data,
    eventId: _get(company, "meta.active_event_id")
  }

}

render()
{

  const { company, booths, url , eventId} = this.props;

  const purchases = _get(company, "instances");
  const data = filterCompanyInstances(purchases, eventId);
  const selectedBoothIds = _map(data, 'formdata.id');
  const selectedBoothNames = _map(data, 'formdata.ti');

  const name = _get(company, "profile.name");

  //check for custom OG image!!!
  const logotype = getCompanyLogotype(company)
  const ogimage = getCompanyAltOgImage(company, url.asPath)

  return (<Layout>

    <Head
      image={ ogimage }
      url={ url.asPath }
      titleLabel={["companies.opengraph.title", {name : name}]}
    />

    <Wrapper label="">

      <Section

        leftSize={5}
        left={

          <div>

            <img src={logotype} alt="" style={{maxWidth: 300, maxHeight: 200}} />

            {/* <Typography label={["exhibitors.booth_location", {
                cname2 : name,
                loc : selectedBoothNames.join(","),
                smart_count : selectedBoothNames.length
              }]} /> */}

          </div>

         }
         leftCentered={true}
         right={
           <div>

          <Tags tags={_get(company.profile, "keywords")} />

          <CompanyProfile company={company} />
          </div>
        } />

    </Wrapper>


    <Wrapper label="visitors.register" color="#fafafa" links={[
       <Link key="more" href="/visit" label="visitors.more_info" variant="flat" color="secondary" />
    ]}>
      <Visitor  />
    </Wrapper>


    <Wrapper label={["exhibitors.booth_location_full", {
        cname2 : name,
        loc : selectedBoothNames.join(","),
        smart_count : selectedBoothNames.length
      }]}>
      <Bookingmap selected={selectedBoothIds} />
    </Wrapper>






  </Layout>)
}

}


export default reduxPage(Company )
