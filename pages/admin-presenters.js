import _get from 'lodash/get';
import Divider from '@material-ui/core/Divider';

import { MyHead as Head, MyLink as Link } from '../next';

import {
  MyTypography as Typography,
  TwoColsLayout as Section,
  Wrapper
} from '../components';

import Layout from '../layouts/main';

import { getPresenterOgImage, generateLinkParams, fetcher } from '../helpers';

import { connect } from 'react-redux';

class PageSpeakerSocial extends React.Component {
  static async getInitialProps({
    err,
    req,
    res,
    pathname,
    query,
    asPath,
    isServer,
    store
  }) {
    const results = await fetcher({ presenters: false }, store);

    return {
      presenters: results.getData('presenters'),
      asPath: asPath
    };
  }

  render() {
    const { presenters, asPath } = this.props;

    return (
      <Layout>
        <Head url={asPath} />

        <Wrapper first label="">
          {presenters.map((presenter, idx) => {
            const name = `${_get(presenter, 'fname')} ${_get(
              presenter,
              'lname'
            )}`;
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

            const ogImage = getPresenterOgImage(presenter, 'template_speaker2');
            const linkParams = generateLinkParams(
              name,
              'speaker',
              presenter.id
            );

            return (
              <div>
                <Section
                  key={idx}
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

export default connect(
  null,
  null
)(PageSpeakerSocial);
