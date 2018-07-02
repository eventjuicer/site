import React from 'react'

import {
  MyHead as Head
} from '../next'

import {connect} from "react-redux";

import {
  Typography,
  Wrapper,
  Schedule,
  HeroCustom as Hero,
  ColumnList
} from '../components';

import {fetcher} from '../helpers'

import Layout from '../layouts/main';
import Visitor from '../roles/Visitor'


class PageError extends React.Component {

  static async getInitialProps({ res, err, store }) {

    const results = await fetcher({exhibitors : false, presenters : false}, store);

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


        {/* <Wrapper
              label="presenters.schedule"
              secondaryTitle="Expo start 10:00, Prezentacje start 11:15, Wstęp BEZPŁATNY (wymagana rejestracja)"

              // links={[
              //   <Link href="/agenda" label="presenters.list_full" variant="flat" color="secondary" />
              // ]}
            >
              <Schedule    />
        </Wrapper> */}



        <Wrapper label="exhibitors.list_full" color="#ffffff">
          <ColumnList data={ exhibitors } />
        </Wrapper>



      </Layout>

    )
  }
}

export default connect()(PageError)
