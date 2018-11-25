import dynamic from 'next/dynamic';

import {
  MyHead as Head, 
  MyLink as Link,
  connect,
  LayoutMain as Layout,
  WidgetVisitor, 
  WidgetSalesMap,
  DatasourceExhibitors,
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
} from 'eventjuicer-site-components'


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

          <DatasourceExhibitors keyword={keyword} sort={['profile.name']}>
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
          </DatasourceExhibitors>

        </Wrapper>


          <Visitor 
          label="visitors.register"
          color="#ffffff"
          links={[
            <Link
              key="visit"
              href="/visit"
              label="visitors.more_info"
              variant="text"
              color="secondary"
            />
          ]}
          />
 

        <SalesMap 
        label="exhibitors.map.title"
        />

       
      </Layout>
    );
  }
}

export default connect()(PageExhibitorsByKeyword);
