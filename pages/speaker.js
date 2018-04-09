

import dynamic from 'next/dynamic'
import Error from 'next/error'

import {
  MyHead as Head,
  MyLink as Link
} from '../next'

import reduxPage from '../redux'

import _keyBy from 'lodash/keyBy'
import _get from 'lodash/get'
import _map from 'lodash/map'

import {
  MyTypography as Typography,
  TwoColsLayout as Section,
  Wrapper,
  Presentation,
  resourceFetchSuccess,
  Tags,
  MyAvatar as Avatar
} from '../components';


import Layout from '../layouts/main';



/*USER REGISTRATION*/
import Visitor from '../roles/Visitor'
/*USER REGISTRATION*/


import {
  stripTags,
  escapeHtml,
  getCompanyLogotype,
  getCompanyOgImage
} from '../helpers'


// TabContainer.propTypes = {
// //  children: PropTypes.node.isRequired,
// };

class PageSpeaker extends React.Component {


static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
{

  const _speakers = await fetch(`https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/presenters`)
  const speakers = await _speakers.json()

  store.dispatch(
    resourceFetchSuccess("presenters", speakers.data)
  )

  return {
    speakers : speakers.data,
    speakerId : query.id,
    // eventId: _get(company, "meta.active_event_id")
  }

}

render()
{

  const { speakers, speakerId, url} = this.props;

  const keyedSpeakers = _keyBy(speakers, "id");
  const speaker = speakerId in keyedSpeakers ? keyedSpeakers[speakerId] : null

  const name = `${_get(speaker, "fname")} ${_get(speaker, "lname")}`
  const image = _get(speaker, "avatar")

  if(!speaker)
  {
    return <Error statusCode={404} />
  }

  return (<Layout>

    <Head
      image={ image }
      url={ url.asPath }
      titleLabel={["speakers.opengraph.title", {name}]}
    />

    <Wrapper label="">


      <Section

        leftSize={5}
        left={

          <div>

            <Avatar
              src={image}
              minimal={false}
            />

          </div>

         }
         leftCentered={true}
         right={

           <div>

             <Presentation data={speaker} />

          </div>
        } />

    </Wrapper>


    <Wrapper label="visitors.register" color="#fafafa" links={[
       <Link key="more" href="/visit" label="visitors.more_info" variant="flat" color="secondary" />
    ]}>
      <Visitor  />
    </Wrapper>



  </Layout>)
}

}


export default reduxPage( PageSpeaker)
