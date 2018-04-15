
import {MyHead as Head} from '../next'
import reduxPage from '../redux'




import {Typography, Wrapper, Bookingmap} from '../components';
import Layout from '../layouts/main';
import Visitor from '../roles/Visitor'


class PageMap extends React.Component {


static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
{
  return {}
}

render()
{

  const { url } = this.props;

  return (

    <Layout>

    <Head />

    <Bookingmap zoom={3} />

   </Layout>

 )
}

}


export default reduxPage(PageMap, (state) => ({foo: state.foo}) )
