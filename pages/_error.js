import React from 'react';
import { MyHead as Head } from '../next';
import { connect } from 'react-redux';

import {
  VideoWithEventInfo,
  Visitor, 
  RoleButtons,
  AllExhibitorsAvatarlist
} from '../compositions';

import Layout from '../layouts/main';

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

        <Visitor label="visitors.register" first />

        <RoleButtons />

        <AllExhibitorsAvatarlist label="exhibitors.list_full" />

      </Layout>
    );
  }
}

export default connect()(PageError);
