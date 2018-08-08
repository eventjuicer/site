import dynamic from 'next/dynamic';
import { MyHead as Head, MyLink as Link } from '../next';

import { connect } from 'react-redux';

import Layout from '../layouts/main';

import {
  Wrapper,
  Avatarlist,
  Centered,
  Bookingmap,
  Typography,
  Gallery,
  KeywordSelect
} from '../components';

//const Gallery = dynamic(import('../components/GalleryQuoted'))
import Visitor from '../roles/Visitor';

import {Exhibitors} from '../datasources'

class PageExhibitors extends React.Component {
  static async getInitialProps({
    query,
    asPath,
    isServer,
    store
  }) {

    return {
      preload : ["exhibitors", "bookingmap"]
    };
  }

  render() {
    const { exhibitors, booths } = this.props;

    return (

      <Layout>

        <Head />

        <Wrapper label="exhibitors.list_full" first>

          <Exhibitors mobile={false} random={false}>{

              (exhibitors, keywords) =>   <React.Fragment>

                <Centered>
                  <KeywordSelect keywords={keywords} />
                </Centered>

                <Avatarlist data={exhibitors}  />

              </React.Fragment>

            }

          </Exhibitors>

        </Wrapper>

        <Wrapper
          label="visitors.register"
          color="#fafafa"
          links={[
            <Link
              key="visit"
              href="/visit"
              label="visitors.more_info"
              variant="flat"
              color="secondary"
            />
          ]}
        >
          <Visitor />
        </Wrapper>

        <Wrapper label="exhibitors.map.title">
          {/* <h1>SCROLL </h1> */}
          <Bookingmap />
        </Wrapper>
      </Layout>
    );
  }
}

export default connect()(PageExhibitors);
