

import _get from 'lodash/get'

import {MyHead as Head} from '../next'
import reduxPage from '../redux'
import {
  Typography,
  Wrapper,
  WhoIsGonnaBeThere,
  Gallery,
  People,
  Avatarlist,
  Hero
} from '../components';

import Layout from '../layouts/main';
import Visitor from '../roles/Visitor'

import {fetcher} from '../helpers'

class PageInvite extends React.Component {


static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
{

  const person = `code/${query.id}`

  const results =  await fetcher({[person] : false, exhibitors : false}, store )

  return {
    person : results.getData(person),
    exhibitors : results.getData("exhibitors"),
    eventId: _get(results.getMeta(person), "active_event_id", 0)
  }


}

render()
{

  const { url, person, exhibitors } = this.props;

  const name = `${_get(person, "fname", "")} ${_get(person, "lname", "")}`;
  const cname = `${_get(person, "cname2", "tajna firma")}`;

  return (<Layout>

    <Head
      url={ url.asPath }
      titleLabel={["visitors.opengraph.title", {name : name, cname : cname, location : 'Kraków', date : '25 kwietnia 2018'}]}
    />


    <Hero>

      <Typography template="visitor_invite" label={["visitors.invite.title", { name, cname }]} /><br/>

      <Typography template="visitor_invite_join" label={["visitors.invite.will_you_join", { name, cname }]} />

    </Hero>



    <Wrapper
      label="presenters.list_featured"
      secondaryTitle="Udział bezpłatny (rejestracja poniżej). Cała agenda już wkrótce..."
      // links={[
      //   <Link href="/agenda" label="presenters.list_full" variant="flat" color="secondary" />
      // ]}
    >
      <People limit={4} link={true} random={false} filter={function(item){ return [71460, 71462, 71461, 71463, 71703, 71707, 71708, 71709].indexOf(item.id) > -1; }}  />
    </Wrapper>


    <Wrapper
      label="visitors.register"
      secondaryTitle="Spotkamy się w gronie ponad 3000 osób!"
    >
          <Visitor />
    </Wrapper>


    <Gallery label="event.gallery" />


    <Wrapper
      label="exhibitors.list_featured"
      secondaryTitle="i ponad 120 innych Wystawców"
    //  dense={true}
    >
      <Avatarlist filter={function(item){ return item.featured; }} data={ exhibitors } />
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


export default reduxPage( PageInvite  )
