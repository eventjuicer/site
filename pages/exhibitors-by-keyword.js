import dynamic from 'next/dynamic';
import { MyHead as Head, MyLink as Link } from '../next';

import { connect } from 'react-redux';

import Layout from '../layouts/main';

import {
  Wrapper,
  Avatarlist,
  ColumnList,
  Bookingmap,
  Typography,
  Gallery,
  resourceFetchSuccess,
  KeywordSelect,
  CompanyLocationMap,
  Centered
} from '../components';

//const Gallery = dynamic(import('../components/GalleryQuoted'))
import Visitor from '../roles/Visitor';

import {Exhibitors} from '../datasources'

class PageExhibitorsByKeyword extends React.Component {

  static async getInitialProps({query}) {

    return {

      preload: ["exhibitors", "bookingmap"],
      keyword : query.keyword

    };

  }

  render() {

    const { exhibitors, bookingmap, keyword } = this.props;

    return (
      <Layout>
        <Head />


        <Wrapper label="exhibitors.list_by_keyword" first>


          <Exhibitors keyword={keyword}>
            {
              (all, keywords, filtered) =>

              <React.Fragment>

              <Centered>
                <KeywordSelect keywords={keywords} selected={keyword} />
              </Centered>

              <Avatarlist data={filtered} limit="200" mobile={false} />

              <CompanyLocationMap data={filtered}>{
                (selected) =>  <div style={{marginTop: 30}}><Bookingmap selected={selected} /></div>
              }</CompanyLocationMap>

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

export default connect()(PageExhibitorsByKeyword);
