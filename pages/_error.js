import React from 'react'

import {
  MyHead as Head
} from '../next'

import reduxPage from '../redux'

import {
  Typography,
  Wrapper,
  People,
  HeroCustom as Hero,
  ColumnList
} from '../components';

import {fetcher} from '../helpers'

import Layout from '../layouts/main';
import Visitor from '../roles/Visitor'


class PageError extends React.Component {

  static async getInitialProps({ res, err, store }) {

    const results = await fetcher({exhibitors : false}, store);

    const statusCode = res ? res.statusCode : err ? err.statusCode : null;

    return { statusCode, exhibitors : results.getData("exhibitors")  }

  }

  render() {

    const {statusCode, exhibitors} = this.props;

    return (

      <Layout>

        <Head />

        <Hero />

        <Wrapper label="visitors.register">

          <Visitor />

        </Wrapper>


        <Wrapper
              label="presenters.list_full"
              secondaryTitle="pełna agenda już wkrótce"
              // links={[
              //   <Link href="/agenda" label="presenters.list_full" variant="flat" color="secondary" />
              // ]}
            >
              <People link={true} random={true} filter={function(item){ return item.bio && item.bio.length >5; }}   />
        </Wrapper>



        <Wrapper label="exhibitors.list_full" color="#ffffff">
          <ColumnList data={ exhibitors } />
        </Wrapper>



      </Layout>

    )
  }
}

export default reduxPage(PageError)
