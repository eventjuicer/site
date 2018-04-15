
import {MyHead as Head} from '../next'
import reduxPage from '../redux'

import {
  Typography,
  Wrapper,
  People
} from '../components';

import Layout from '../layouts/main';

class PageAgendaPreview extends React.Component {

static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
{

return {}

}

render()
{

  const { url } = this.props;

  return (<Layout>

    <Head />


    <Wrapper first
      label="presenters.list_full"
      >
      <People  link={true} />
    </Wrapper>

  </Layout>)
}

}


export default reduxPage( PageAgendaPreview )
