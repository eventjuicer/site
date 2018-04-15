

import dynamic from 'next/dynamic'
import Error from 'next/error'

import {
  MyHead as Head,
  MyLink as Link
} from '../next'

import reduxPage from '../redux'

import _keyBy from 'lodash/keyBy'
import _get from 'lodash/get'

import {
  MyTypography as Typography,
  TwoColsLayout as Section,
  Wrapper,
  Presentation,
  resourceFetchSuccess,
  MyAvatar as Avatar
} from '../components';


import Layout from '../layouts/main';
import Visitor from '../roles/Visitor'

import {
  getPresenterOgImage,
} from '../helpers'


const People = dynamic(import("../components/People"))
const Avatarlist = dynamic(import("../components/Avatarlist"))

import {fetcher} from '../helpers'

class PageSpeaker extends React.Component {

static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
{
  const results = await fetcher({presenters : false, exhibitors : false}, store)

  return {
    speakers : results.getData("presenters"),
    exhibitors : results.getData("exhibitors"),
    speakerId : query.id,
  }

}

render()
{

  const { exhibitors, speakers, speakerId, url} = this.props;
  const keyedSpeakers = _keyBy(speakers, "id");
  const speaker = speakerId in keyedSpeakers ? keyedSpeakers[speakerId] : null
  const name = `${_get(speaker, "fname")} ${_get(speaker, "lname")}`
  const image = _get(speaker, "avatar")
  const logotype = _get(speaker, "logotype")

  if(!speaker)
  {
    return <Error statusCode={404} />
  }

  return (<Layout>

    <Head
      image={ getPresenterOgImage(speaker) }
      url={ url.asPath }
      titleLabel={["presenters.opengraph.title", {name}]}
      descriptionLabel={["presenters.opengraph.description", {
        fname: _get(speaker, "fname"),
        cname2 : _get(speaker, 'cname2'),
        presentation_title : _get(speaker, 'presentation_title'),
      }]}
    />

    <Wrapper first label="">

      <Section

        leftSize={5}
        left={

          <div style={{display : 'flex', flexDirection : 'column', alignItems : 'center', marginTop : 20, marginBottom: 20}}>

            <Avatar
              src={image}
              minimal={false}
            />

            <img src={logotype} alt="" style={{maxWidth : 300, maxHeight : 200, marginTop: 30}} />

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


    <Wrapper
      label="presenters.list_full"
      secondaryTitle="pełna agenda już wkrótce"
      // links={[
      //   <Link href="/agenda" label="presenters.list_full" variant="flat" color="secondary" />
      // ]}
    >
      <People random={true} filter={function(item){ return item.bio && item.bio.length >5; }}   />
    </Wrapper>



      <Wrapper
        label="exhibitors.list_featured"
        secondaryTitle="i ponad 120 innych Wystawców"
      //  dense={true}
      >
        <Avatarlist filter={function(item){ return item.featured; }} data={ exhibitors } />
      </Wrapper>


      <Wrapper label="visitors.register_alt" color="#fafafa" links={[
         <Link key="more" href="/visit" label="visitors.more_info" variant="flat" color="secondary" />
      ]}>
        <Visitor  />
      </Wrapper>



  </Layout>)
}

}


export default reduxPage( PageSpeaker)
