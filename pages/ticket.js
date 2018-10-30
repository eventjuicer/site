import dynamic from 'next/dynamic';
import _get from 'lodash/get';

import { MyHead as Head } from '../next';

import { connect } from 'react-redux';

import {
  TicketDownload,
  Typography,
  Wrapper,
  MyTypography,
  EventInfo,
  Invite
} from '../components';

import Layout from '../layouts/main';

import {
  Visitor, 
  Schedule,
  AllExhibitorsColumnList,
  SalesMap
} from '../compositions'


import { getInviteOgImage } from '../helpers';

class PageTicket extends React.Component {

  static async getInitialProps({
    query,
    asPath,
    isServer,
    store
  }) {

    const person = `code/${query.hash}`;

    return {
      preload : [
        person, "exhibitors"
      ],
      code: query.hash
    };
  }

  render() {
    const { url, code, person, exhibitors } = this.props;

    const name = `${_get(person, 'fname', '')} ${_get(person, 'lname', '')}`;

    return (
      <Layout>
        <Head
          url={`/invite,${_get(person, 'id', 0)}`}
          image={getInviteOgImage(
            `Będę. ${_get(person, 'fname', '')} z ${_get(person, 'cname2')}.`
          )}
          titleLabel={[
            'visitors.opengraph.title',
            { name: name, location: 'Warszawa', date: '7 listopada 2018' }
          ]}
        />

        <Wrapper
          first
          label={['visitors.thankyou', { name: _get(person, 'fname', '') }]}
        >
          <TicketDownload code={code} />

          <EventInfo
            items={[
              {
                icon: 'location',
                secondary: 'event.location',
                primary: 'EXPO XXI Warszawa, Prądzyńskiego 12/14'
              },

              {
                icon: 'date',
                secondary: 'event.date',
                primary: '7 listopada 2018'
              },

              {
                icon: 'alarm',
                secondary: 'event.hours',
                primary: '10:00-17:00'
              }
            ]}
            orientation="h"
            style={{ marginTop: 50 }}
          />

          <Invite person={person} />

        </Wrapper>

        <Schedule />

      <SalesMap
      
        label="exhibitors.map.title2"
        secondaryLabel="exhibitors.map.opensales"

        />
              
        <AllExhibitorsColumnList />

        <Visitor  label="visitors.register_alt" />

      </Layout>
    );
  }
}


export default connect(
  (state, props) => ({
    person : "code" in props && props.code && `code/${props.code}` in state.resources ? state.resources[`code/${props.code}`] : {}
  }), null)(PageTicket);
