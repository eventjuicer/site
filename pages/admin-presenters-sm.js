
import { connect } from 'react-redux';
import _get from 'lodash/get';
import Divider from '@material-ui/core/Divider';


import { MyHead as Head, MyLink as Link } from '../next';

import {
  MyTypography as Typography,
  TwoColsLayout as Section,
  Wrapper
} from '../components';

import Layout from '../layouts/main';
import { getPresenterOgImage, getSpeakerName, generateLinkParams } from '../helpers';

class PageSpeakerSocial extends React.Component {
  static async getInitialProps({
    query,
    asPath,
    isServer,
    store
  }) {
    return {
      preload : ["presenters"],
      asPath: asPath
    };
  }

  render() {
    const { presenters, asPath } = this.props;

    return (
      <Layout>
        <Head url={asPath} />

        <Wrapper first label="">
          {presenters.map(presenter => {
            const name = getSpeakerName(presenter);
            const job = `${_get(presenter, 'position')} ${_get(
              presenter,
              'cname2'
            )}`;
            const bio = `${_get(presenter, 'bio')}`;
            const title = `${_get(presenter, 'presentation_title')}`;
            const description = `${_get(
              presenter,
              'presentation_description'
            )}`;

            const ogImage = getPresenterOgImage(presenter);
            const linkParams = generateLinkParams(
              name,
              'speaker',
              presenter.id
            );

            return (
              <div key={presenter.id}>
                <Section
                  key={presenter.id}
                  leftSize={4}
                  left={
                    <div style={{ marginTop: 10 }}>
                      <div style={{ marginBottom: 10 }}>
                        <Typography template="presenter1">{name}</Typography>

                        <Typography template="presenter2">{job}</Typography>

                        <Typography template="presenterText">{bio}</Typography>
                      </div>

                      <Divider />

                      <div style={{ marginTop: 10 }}>
                        <Typography template="presenter2">{title}</Typography>

                        <Typography template="presenterText">
                          {description}
                        </Typography>

                        <Link {...linkParams} label="common.details" />
                      </div>
                    </div>
                  }
                  leftCentered={false}
                  right={
                    <img
                      src={ogImage}
                      alt=""
                      style={{ marginTop: 10, marginLeft: 20, maxWidth: 770 }}
                    />
                  }
                />

                <Divider />
              </div>
            );
          })}
        </Wrapper>
      </Layout>
    );
  }
}

export default connect(state => ({presenters : state.resources.presenters}))(PageSpeakerSocial);
