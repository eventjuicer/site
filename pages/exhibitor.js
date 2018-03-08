
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

import Button from 'material-ui/Button'


import RegisterButton from '../components/RegisterButton'

const filterCompanyInstances = (company, eventId) => _filter(company, function(i){
  if(i.event_id != eventId || ! "id" in i.formdata)
  {
    return false;
  }

  return true;
});


class Exhibitor extends React.Component {

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

  const { company, booths, url , eventId} = this.props;

  const data = filterCompanyInstances(company.instances, eventId);
  const selectedBoothIds = _map(data, 'formdata.id');
  const selectedBoothNames = _map(data, 'formdata.ti');
  const {company_description, test} = company.fields;

//  console.log(company);


  return (<Layout>

    <Head />



    <Wrapper title="">



      <PageLayout

        left={<Centered>

          <div>
            <img src='https://buyersguide.caranddriver.com/media/assets/submodel/280_8119.jpg' />
          </div>


        </Centered>}
        right={

          <div>





            {test && <div>test OK</div>}

            <Typography.H1>  {_get(company, "fields.cname2")} </Typography.H1>





            <Typography.Section>

            <Typography.H2>O firmie</Typography.H2>

            <Typography.P1>{_get(company, "fields.company_description")}</Typography.P1>

            </Typography.Section>

            <Typography.Section>

            <Typography.H2>test</Typography.H2>

            <Typography.P1>{_get(company, "fields.company_description")}</Typography.P1>

            </Typography.Section>


                 <Button variant="flat" color="default" size="medium">
                   <span style={{width: 20}} className="fa fa-facebook"></span>{' '}facebook
                 </Button>

                 <Button variant="flat" color="default" size="medium">
                   <span style={{width: 20}} className="fa fa-twitter"></span>{' '}twitter
                 </Button>

                 <Button variant="flat" color="default" size="medium">
                   <span style={{width: 20}} className="fa fa-linkedin"></span>{' '}linkedin
                 </Button>





            {/* <RegisterByRole role="visitor" /> */}

          </div>
        } />


    </Wrapper>

    <Wrapper title="">
      <RegisterButton />
    </Wrapper>


    <Wrapper title={`Stoisko ${ selectedBoothNames.join(",") }`}>
      <Bookingmap booths={ booths } selected={selectedBoothIds} />
    </Wrapper>

  </Layout>)
}

}


export default reduxPage(Exhibitor, (state) => ({foo: state.foo}) )
