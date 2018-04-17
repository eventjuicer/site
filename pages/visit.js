

import {MyHead as Head} from '../next'
import reduxPage from '../redux'
import {
  Wrapper,
  WhoIsGonnaBeThere,
  People,
  //Googlemap,
  Gallery
} from '../components';

import Layout from '../layouts/main';
import Visitor from '../roles/Visitor'


class PageVisit extends React.Component {


static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
{
  return {}
}

render()
{

  const { url } = this.props;

  return (<Layout>

    <Head />

    <Wrapper label="visitors.register_alt" first>
          <Visitor />
    </Wrapper>


    <Wrapper
      label="visitors.attendees"
      secondaryTitle="oraz 3000 innych osób"
      >
      <WhoIsGonnaBeThere />
    </Wrapper>


    <Wrapper
      label="presenters.list_featured"
      secondaryTitle="22 Prezentacje, 2 panele dyskusyjne! Udział bezpłatny."
    >
      <People limit={16} link={true} random={true} filter={function(item){ return item.bio.length > 10 }}  />
    </Wrapper>


    <Gallery />

    {/* <Googlemap /> */}


  </Layout>)
}

}


export default reduxPage( PageVisit )
