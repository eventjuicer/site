

import _get from 'lodash/get'

import {MyHead as Head} from '../next'
import reduxPage from '../redux'
import {
  Typography,
  Faq,
  Wrapper
} from '../components';

import Layout from '../layouts/main';

class PageFaq extends React.Component {

static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
{
  return {}
}

render()
{

  const { url  } = this.props;


  return (
    <Layout>

      <Wrapper title="FAQ">


      <Faq url={url.asPath} baseLabel="exhibitors.faq.before_event" items={[
          {
            label : "representatives",
            important : true,
            buttons : [

            ]
          },
          {label : "additional_paid_services"},
          {label : "shipping_of_materials"},
          {label : "standard_offering"},
          {label : "how_to_promote"},
          {label : "public_profile"},
      ]} />

      <Faq url={url.asPath} baseLabel="exhibitors.faq.event" items={[
          {label : "after_party"},
          {label : "catering"},
          {label : "badges"},
          {label : "parking_setupday"},
          {label : "parking_eventday"},
          {label : "problems_equipment"},
          {label : "problems_services"},
          {label : "badge_scanner"},
      ]} />

      <Faq url={url.asPath}  baseLabel="exhibitors.faq.after_event" items={[
          {label : "badge_scanner_contacts"},
          {label : "next_booth_sales"}
      ]} />


    </Wrapper>

  </Layout>)
}

}


export default reduxPage(PageFaq, (state) => ({foo: state.foo}) )
