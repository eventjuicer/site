
import Head from '../next/MyHead'
import reduxPage from '../redux'

import {
  Typography,
  Wrapper,
} from '../components';

import Layout from '../layouts/raw';

import SmGenerator from '../generators/Sm'


class Sm extends React.Component {


static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
{

  const _presenters = await fetch(`https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/presenters`)
  const presenters = await _presenters.json()
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
    presenters : presenters.data,
  //eventId: _get(company, "meta.active_event_id")
  }

}

render()
{

  const { url } = this.props;

  return (<Layout>

    <Head />


    <Wrapper
      title=""
    //  secondaryTitle="pełna agenda już wkrótce"
      // links={[
      //   <Link href="/agenda" label="presenters.list_full" variant="flat" color="secondary" />
      // ]}
    >
      <SmGenerator   />

    </Wrapper>





  </Layout>)
}

}


export default reduxPage(Sm, (state) => ({foo: state.foo}) )
