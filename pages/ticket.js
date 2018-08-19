import dynamic from 'next/dynamic';
import _get from 'lodash/get';

import { MyHead as Head } from '../next';

import { connect } from 'react-redux';

import {
  TicketDownload,
  Typography,
  Wrapper,
  ColumnList,
  MyTypography,
  Schedule,
  Googlemap,
  EventInfo,
  Invite
} from '../components';

import Layout from '../layouts/main';
import Visitor from '../roles/Visitor';

import { getInviteOgImage } from '../helpers';

const Bookingmap = dynamic(import('../components/Bookingmap/Bookingmap'));

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
                label: 'event.location',
                text: 'EXPO XXI Warszawa, Prądzyńskiego 12/14'
              },

              {
                icon: 'date',
                label: 'event.date',
                text: '7 listopada 2018'
              },

              {
                icon: 'alarm',
                label: 'event.hours',
                text: '10:00-17:00'
              }
            ]}
            orientation="h"
            style={{ marginTop: 50 }}
          />

          <Invite person={person} />
        </Wrapper>

        <Wrapper
          first
          label="presenters.schedule"
          secondaryTitle="Expo start 10:00, Prezentacje start 11:15, Wstęp BEZPŁATNY (wymagana rejestracja)"
        >
          <Schedule />
        </Wrapper>

        <Wrapper
          label="exhibitors.map.title"
          secondaryTitle="Chcesz się wystawić? Zostało tylko kilka stoisk!"
        >
          {/* <WidthAwareInfo /> */}
          <Bookingmap />
        </Wrapper>

        <Wrapper label="exhibitors.list_full" color="#ffffff">
          <ColumnList data={exhibitors} />
        </Wrapper>

        <Wrapper label="visitors.register_alt">
          <Visitor />
        </Wrapper>

        {/* <Googlemap /> */}
      </Layout>
    );
  }
}

export default connect(
  null,
  null
)(PageTicket);
