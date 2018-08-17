import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

import { EventInfo, Benefits } from '../components';

import { StepForm } from '../formik';

import GridBenefits from '../components/GridBenefits'

import { GraduationCap as Icon } from 'react-icons/fa';


const Visitor = ({ links, width }) => (

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

    <Grid item xs={10} sm={6} md={5} lg={3} xl={3}>
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
    </Grid>

    {/* <Grid item xs={12} sm={6} md={12} lg={4} xl={4}>
      <Benefits
        labels={[

         {
      //     icon : <Icon />,
           label :  'visitors.benefits.free_presentations_entry'
         },

        {
  //         icon : <Icon />,
          label :  'visitors.benefits.free_expo_entry'
        },

        {
  //         icon : <Icon />,
           label : 'visitors.benefits.free_presentations_access'
        }

        ]}
        orientation={width === 'md' ? 'h' : 'v'}
      />
    </Grid> */}
  </Grid>

  <GridBenefits />

  </div>
);

Visitor.defaultProps = {
  links: []
};

export default connect(state => ({ width: state.app.width }))(Visitor);
