import React from 'react';
import Grid from '@material-ui/core/Grid';


import { EventInfo } from '../components';
import { withStyles } from '@material-ui/core/styles';

import { StepForm } from '../formik';


const styles = {

  lanyard : {
    width : "100%"
  }

}

const Visitor = ({ classes }) => (

  <div>

  <Grid container spacing={8} justify="space-between">
    <Grid item xs={12} sm={12} md={6} lg={5} xl={5}>

      <StepForm
        data={{}}
        ticketId={1355}
        fields={{
          email: 1,
          fname: 1,
          lname: 1,
          cname2: 1,
          position: 1,
          phone: 1
        }}
        start={['email', 'fname']}
      />

    </Grid>

    {/* <Grid item xs={10} sm={6} md={5} lg={3} xl={3}>
      <EventInfo
        items={[
          {
            icon: 'location',
            label: 'event.location',
            text: 'EXPO XXI, Warszawa'
          },

          {
            icon: 'date',
            label: 'event.date',
            text: '7 listopada 2019'
          },

          {
            icon: 'alarm',
            label: 'event.hours',
            text: '10:00-17:00'
          }
        ]}
        orientation="v"
      />
    </Grid> */}

    <Grid item xs={12} sm={6} md={12} lg={4} xl={4}>

      <img src="/static/lanyard.jpg" className={classes.lanyard} />

    </Grid>
  </Grid>


  </div>
);

Visitor.defaultProps = {
  links: []
};

export default withStyles(styles)(Visitor);
