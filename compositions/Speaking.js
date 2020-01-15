import React from 'react';
import Grid from '@material-ui/core/Grid';


import { EventInfo, Wrapper } from '../components';
import { withStyles } from '@material-ui/core/styles';

import { StepForm } from '../formik';


const styles = theme => ({

  lanyard : {
    width : "100%"
  }

})

const Speaking = ({ classes, ...rest }) => (


  <Wrapper {...rest}>


  <Grid container spacing={8} justify="space-between">
    <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>

      <StepForm
        data={{}}
        ticketId={1790}
        baseLabel="presenters"
        fields={{
          email: 1,
          fname: 1,
          lname: 1,
          cname2: 1,
          phone: 1,
          presenter : 1,
          presentation_title : 1,
          presentation_description : 1
        }}
        start={[
          'presenter',
          'presentation_title', 
          'presentation_description',
          'cname2'
        ]}
        template="pl-presenters-application"
        cc="prezentacje@targiehandlu.com.pl"
        url='https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/register'
      />

    </Grid>


    <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>

      {/* <img src="/static/lanyard.jpg" className={classes.lanyard} /> */}

    </Grid>
  </Grid>


  </Wrapper>

);

Speaking.defaultProps = {
  links: [],
  label : "presenters.form.title"
};

export default withStyles(styles)(Speaking);
