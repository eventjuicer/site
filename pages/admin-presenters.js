
import {
  MyHead as Head,
  MyLink as Link
} from '../next'

import reduxPage from '../redux'

import _get from 'lodash/get'
import _keyBy from 'lodash/keyBy'

import {
  MyTypography as Typography,
  TwoColsLayout as Section,
  Wrapper,
  Presentation,
  resourceFetchSuccess
} from '../components';

import Divider from 'material-ui/Divider'

import Layout from '../layouts/main';
import Visitor from '../roles/Visitor'

import {
  getPresenterOgImage,
  generateLinkParams
} from '../helpers'


class PageSpeakerSocial extends React.Component {


static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
{


    const urls = [`presenters`];

    const [presenters] = await Promise.all(
      urls.map(url => fetch(`https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/${url}`).
      then(resp => resp.json())
    ))

    store.dispatch(
      resourceFetchSuccess("presenters", presenters.data)
    )

  return {
    presenters : presenters.data,
    // eventId: _get(company, "meta.active_event_id")
  }

}

render()
{

  const { presenters, url } = this.props;


  return (<Layout>

    <Head
      url={ url.asPath }
    />

    <Wrapper label="">

      {

        presenters.map((presenter, idx) => {

          const name = `${_get(presenter, "fname")} ${_get(presenter, "lname")}`
          const job = `${_get(presenter, "position")} ${_get(presenter, "cname2")}`
          const bio = `${_get(presenter, "bio")}`
          const title = `${_get(presenter, "presentation_title")}`
          const description = `${_get(presenter, "presentation_description")}`

          const ogImage = getPresenterOgImage(presenter);
          const linkParams = generateLinkParams(name, "speaker", presenter.id);

        return (

          <Section


            leftSize={4}
            left={

              <div style={{marginTop : 10}}>

                <div style={{marginBottom : 10}}>

                  <Typography template="presenter1">{name}</Typography>

                  <Typography template="presenter2">{job}</Typography>

                  <Typography template="presenterText">{bio}</Typography>

                </div>

                <Divider />

                <div style={{marginTop : 10}}>

                  <Typography template="presenter2">{title}</Typography>

                  <Typography template="presenterText">{description}</Typography>

                  <Link {...linkParams} label="common.details" />

                </div>

              </div>

             }
             leftCentered={false}
             right={

               <img src={ ogImage } alt="" style={{marginTop: 10}} />
             }

          />

          )

        })

      }


    </Wrapper>


  </Layout>)
}

}


export default reduxPage( PageSpeakerSocial )
