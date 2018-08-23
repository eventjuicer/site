import { MyHead as Head } from '../next';

import { connect } from 'react-redux';
import _get from 'lodash/get';

import {
  Typography,
  Wrapper,
  WhoIsGonnaBeThere,
  MyTypography,
  Googlemap
} from '../components';

import Layout from '../layouts/main';
import {Visitor} from '../compositions'
 
class ThankyouPage extends React.Component {
  static async getInitialProps({
    query,
    isServer,
    store
  }) {

    const person = `code/${query.hash}`;

    return {
      preload : [person, "exhibitors"],
      asPath: asPath
    };
  }

  render() {
    const { url, person, asPath } = this.props;

    const name = `${_get(person, 'fname', '')} ${_get(person, 'lname', '')}`;

    return (
      <Layout>
        <Head
          url={asPath}
          titleLabel={[
            'visitors.opengraph.title',
            {
              name: name,
              location: 'Warszawa',
              date: '7 listopada 2018'
            }
          ]}
        />

        <Wrapper
          first
          label={['visitors.thankyou', { name: _get(person, 'fname', '') }]}
        />

        <Wrapper label="visitors.attendees">
          <WhoIsGonnaBeThere />
        </Wrapper>

        <Wrapper label="visitors.register_alt">
          <Visitor />
        </Wrapper>

        {/* <Googlemap /> */}
      </Layout>
    );
  }
}

export default connect()(ThankyouPage);
