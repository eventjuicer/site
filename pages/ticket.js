
import {
  MyHead as Head
} from '../next'

import reduxPage from '../redux'
import _get from 'lodash/get'

import {
  Typography,
  Wrapper,
  WhoIsGonnaBeThere,
  MyTypography,
  Googlemap
} from '../components';

import Layout from '../layouts/main';
import Visitor from '../roles/Visitor'
import {fetcher} from '../helpers'


class PageTicket extends React.Component {


static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
{

  const person = `code/${query.hash}`

  const results =  await fetcher({[person] : false, exhibitors : false})

  return {
    person : results.getData(person),
    eventId: _get(results.getMeta(person), "active_event_id", 0)
  }

}

render()
{

  const { url, person } = this.props;

  const name = `${_get(person, "fname", "")} ${_get(person, "lname", "")}`;

  return (<Layout>

    <Head
      url={ url.asPath }
      titleLabel={["visitors.opengraph.title", {
          name : name,
          location : 'Kraków', date : '25 kwietnia 2018'}]}
    />


    <Wrapper first label={["visitors.thankyou", { name : _get(person, "fname", "") }]}>


    </Wrapper>


    <Wrapper label="visitors.attendees">
      <WhoIsGonnaBeThere />
    </Wrapper>


    <Wrapper label="visitors.register_alt">
          <Visitor />
    </Wrapper>


    {/* <Googlemap /> */}


  </Layout>)
}

}


export default reduxPage( PageTicket )
