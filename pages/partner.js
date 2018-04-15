
import {MyHead as Head} from '../next'
import reduxPage from '../redux'

import {
  Typography,
  Wrapper,
  WhoIsGonnaBeThere,
  Googlemap
} from '../components';

import Layout from '../layouts/main';
import Visitor from '../roles/Visitor'


class Partner extends React.Component {

static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
{
  return {}
}

render()
{

  const { url } = this.props;

  return (<Layout>

    <Head />

    <Wrapper label="visitors.register_alt">

      <Visitor />

    </Wrapper>


    <Wrapper label="visitors.attendees">

      <WhoIsGonnaBeThere />

    </Wrapper>


    <Wrapper>

      <Visitor />

    </Wrapper>


    <Googlemap />


  </Layout>)
}

}


export default reduxPage(Partner, (state) => ({foo: state.foo}) )
