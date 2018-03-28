
import Head from '../next/MyHead'
import reduxPage from '../redux/store'


import _get from 'lodash/get'
import _map from 'lodash/map'


import Typography from '../components/MyTypography';
import {TwoColsLayout as Section} from '../components/MyLayouts'

import Layout from '../layouts/main';
import Wrapper from '../components/Wrapper'
import Bookingmap from '../components/Bookingmap'


import CompanyProfile from '../components/Company'

/*USER REGISTRATION*/
import Visitor from '../components/roles/Visitor'
import Link from '../next/MyLink'
/*USER REGISTRATION*/


import {resourceFetchSuccess} from '../components/redux/actions'

import {filterCompanyInstances} from '../helpers'




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

  const data = filterCompanyInstances(company.instances, eventId);
  const selectedBoothIds = _map(data, 'formdata.id');
  const selectedBoothNames = _map(data, 'formdata.ti');
  const logotype = _get(company, "profile.logotype")
  const name = _get(company, "profile.name");

  return (<Layout>

    <Head
      image={ logotype }
      url={ url.asPath }
      title={["companies.opengraph.title", {name : name}]}
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
