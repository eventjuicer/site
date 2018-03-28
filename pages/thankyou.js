
import Head from '../next/MyHead'
import reduxPage from '../redux/store'


import _get from 'lodash/get'

import {Typography, Wrapper, WhoIsGonnaBeThere, Googlemap} from '../components';
import Layout from '../layouts/main';
import Visitor from '../components/roles/Visitor'


class Thankyou extends React.Component {


static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
{

  const _person = await fetch(`https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/code/${query.hash}`)
  const person = await _person.json()


  const _exhibitors = await fetch('https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/exhibitors')
  const exhibitors = await _exhibitors.json()

  //
  // const _booths = await fetch('https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/bookingmap')
  // const bookingmap = await _booths.json()
  //
  //
  // store.dispatch(
  //   resourceFetchSuccess("bookingmap", bookingmap.data)
  // )
  //
  return {
    person : person.data,
    eventId: _get(person, "meta.active_event_id", 0)
  }

}

render()
{

  const { url, person } = this.props;

  const name = `${_get(person, "fname", "")} ${_get(person, "lname", "")}`;

  return (<Layout>

    <Head
      url={ url.asPath }
      title={["visitors.opengraph.title", {name : name, location : 'Kraków', date : '25 kwietnia 2018'}]}
    />

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


export default reduxPage(Thankyou, (state) => ({foo: state.foo}) )
