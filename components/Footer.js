import React from 'react';
import compose from 'recompose/compose';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import EventInfo from './EventInfo';
import Person from './PersonSlim';
import Typography from './MyTypography';

import Wrapper from './Wrapper';

const styles = theme => ({
  container: {
    borderTop: '1px solid #cccccc'
  },

  paper: {
    padding: 30
  }
});

const Footer = ({ links, classes, width }) => (
  <div className={classes.container}>
    <Wrapper dense={true} color="#fafafa">
      <Grid container spacing={8} justify="space-around" alignItems="center">
        <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
          <Person />
        </Grid>

        <Grid item xs={12} sm={6} md={5} lg={3} xl={3}>
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
            orientation="v"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <Typography />

          <EventInfo
            items={[
              {
                label: 'event.organizer.name',
                text: 'Infoguru Sp. z o.o. Sp. k.'
              },

              {
                label: 'event.organizer.address',
                text: 'POLAND, Poznań, Truskawiecka 13'
              },

              {
                label: 'event.organizer.registration',
                text: 'VAT ID 7811967834'
              }
            ]}
            orientation="v"
          />
        </Grid>
      </Grid>
    </Wrapper>
  </div>
);

Footer.defaultProps = {
  links: []
};

const enhance = compose(withStyles(styles));

export default enhance(Footer);
