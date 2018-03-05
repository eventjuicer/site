

import Head from 'next/head'
import reduxPage from '../redux/store'



import Layout from '../layouts/main';
import Wrapper from '../components/Wrapper'
import Bookingmap from '../components/Bookingmap'
import find from 'lodash/find';

class Exhibitor extends React.Component {

static async getInitialProps({pathname, query, asPath, req, res, jsonPageRes, err})
{
  const exhibitorId = query.id;

  const _exhibitors = await fetch(`https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/companies/${exhibitorId}`)
  const exhibitors = await _exhibitors.json()

  const _bookingmap = await fetch('https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/bookingmap')
  const bookingmap = await _bookingmap.json()

  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent : userAgent, exhibitors : exhibitors.data, booths : bookingmap.data }

}

render()
{

  const { exhibitors, booths, url } = this.props;



  return (<Layout>

    <Head>
      <title>ID = {this.props.url.query.id}</title>
    </Head>

    <Wrapper title="Zarezerwuj stoisko!">
      <Bookingmap booths={ booths } />
    </Wrapper>

  </Layout>)
}

}


export default reduxPage(Exhibitor, (state) => ({foo: state.foo}) )
