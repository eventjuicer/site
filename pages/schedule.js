
import {
  MyHead as Head
} from '../next'

import reduxPage from '../redux'

import {
  Typography,
  Wrapper,
  WhoIsGonnaBeThere,
//  Googlemap,
  Schedule
} from '../components';

import Layout from '../layouts/main';

import Visitor from '../roles/Visitor'


class PageSchedule extends React.Component {


static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
{
   return {}

}

render()
{

  const { url } = this.props;

  return (<Layout>

    <Head />

    <Wrapper
      first
      label="presenters.schedule"
      secondaryTitle="godziny prezentacji zostaną podane wkrótce"
      // links={[
      //   <Link href="/agenda" label="presenters.list_full" variant="flat" color="secondary" />
      // ]}
    >
      <Schedule stages={3} random={true} filter={function(item){ return item.bio && item.bio.length >5; }}   />

    </Wrapper>

    <Wrapper label="visitors.register_alt">

      <Visitor />

    </Wrapper>

    <Wrapper label="visitors.attendees">

      <WhoIsGonnaBeThere />

    </Wrapper>

    <Wrapper>
      <Visitor />
    </Wrapper>

    {/* <Googlemap /> */}

  </Layout>)
}

}


export default reduxPage(PageSchedule )
