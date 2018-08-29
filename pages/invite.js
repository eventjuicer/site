import _get from 'lodash/get';
import { MyHead as Head } from '../next';
import { connect } from 'react-redux';

import {
  Typography,
  Wrapper,
  Gallery,
  EventInfo
} from '../components';

import Layout from '../layouts/main';

import {
  Visitor, 
  FeaturedExhibitors
} from '../compositions'

import { fetcher, getInviteOgImage } from '../helpers';

class PageInvite extends React.Component {
  static async getInitialProps({
   
    query,
    asPath,
    isServer,
    store
  }) {
    const person = `code/${query.id}`;

    return {

      preload : [person, "exhibitors"],
      asPath: asPath,
 
    };
  }

  render() {
    const { url, person, exhibitors, asPath } = this.props;

    const name = `${_get(person, 'fname', '')} ${_get(person, 'lname', '')}`;
    const cname = `${_get(person, 'cname2', '')}`;

    return (
      <Layout>
        <Head
          url={asPath}
          image={getInviteOgImage(
            `Będę. ${_get(person, 'fname', '')} z ${_get(person, 'cname2')}`
          )}
          titleLabel={[
            'visitors.opengraph.title',
            {
              name: name,
              cname: cname,
              location: 'Warszawa',
              date: '7 listopada 2018'
            }
          ]}
        />

        <Wrapper
          first
          label={['visitors.invite.title', { name, cname }]}
          secondaryTitle="22 Prezentacje, 130 Wystawców i prawdziwy networking!"
        >
          <Typography
            template="visitor_invite_join"
            label={['visitors.invite.will_you_join', { name, cname }]}
          />

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
        </Wrapper>

      
        <Visitor label="visitors.register" />
        
        <FeaturedExhibitors />

       

  

       
        {/* <Googlemap /> */}
      </Layout>
    );
  }
}

export default connect()(PageInvite);
