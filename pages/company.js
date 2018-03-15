
import Head from '../next/MyHead'
import reduxPage from '../redux/store'


import _get from 'lodash/get'
import _filter from 'lodash/filter';
import _map from 'lodash/map'


import * as Typography from '../components/MyTypography';
import {TwoColsLayout as PageLayout, Centered} from '../components/MyLayouts'

import Layout from '../layouts/main';
import Wrapper from '../components/Wrapper'
import Bookingmap from '../components/Bookingmap'


import RegisterButton from '../components/RegisterButton'

import CompanyProfile from '../components/Company'

const filterCompanyInstances = (company, eventId) => _filter(company, function(i){
  if(i.event_id != eventId || ! "id" in i.formdata)
  {
    return false;
  }

  return true;
});




// TabContainer.propTypes = {
// //  children: PropTypes.node.isRequired,
// };

class Company extends React.Component {


static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
{

  const _company = await fetch(`https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/companies/${query.id}`)
  const company = await _company.json()

  const _booths = await fetch('https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/bookingmap')
  const booths = await _booths.json()

  return {
    company : company.data,
    eventId: _get(company, "meta.active_event_id"),
    booths : booths.data
  }

}

render()
{

  const { company, booths, url , eventId, classes} = this.props;
  const data = filterCompanyInstances(company.instances, eventId);
  const selectedBoothIds = _map(data, 'formdata.id');
  const selectedBoothNames = _map(data, 'formdata.ti');


//  console.log(company);


  return (<Layout>

    <Head />



    <Wrapper title="">

      <PageLayout

        leftSize={5}
        left={<Centered>

          <div>
            <img src={_get(company, "profile.logotype")} alt="" style={{maxWidth: 300, maxHeight: 200}} />
          </div>


        </Centered>}
        right={
          <CompanyProfile company={company} />
        } />


    </Wrapper>

    {/* <Wrapper title="">
      <RegisterButton />
    </Wrapper> */}


    <Wrapper title={`Stoisko ${ selectedBoothNames.join(",") }`}>
      <Bookingmap booths={ booths } selected={selectedBoothIds} />
    </Wrapper>

  </Layout>)
}

}


export default reduxPage(Company, (state) => ({foo: state.foo}) )
