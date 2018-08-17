import React from 'react';

import { MyHead as Head } from '../next';

import { connect } from 'react-redux';

import {
  Typography,
  Wrapper,
  Schedule,
  ColumnList
} from '../components';


import {
  VideoWithEventInfo
} from '../compositions';

import {Exhibitors} from '../datasources'

import Layout from '../layouts/main';

import Visitor from '../roles/Visitor';


class PageError extends React.Component {

  static async getInitialProps({ res, err, store }) {

    const statusCode = res ? res.statusCode : err ? err.statusCode : null;

    return {
      statusCode,
      preload : ["exhibitors", "presenters"]
    };
  }

  render() {
    const { statusCode } = this.props;

    return (
      <Layout>
        <Head />

        <VideoWithEventInfo />

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


          <Exhibitors limit={4}>
            {/* {(exhibitors) =>  <ColumnList data={exhibitors} />} */}
          </Exhibitors>


        </Wrapper>
      </Layout>
    );
  }
}

export default connect()(PageError);
