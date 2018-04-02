

import compose from 'recompose/compose'
import Grid from 'material-ui/Grid';
import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';

import IconDate from 'material-ui-icons/DateRange';
import IconLocation from 'material-ui-icons/LocationOn';
import IconAlarm from 'material-ui-icons/Alarm';
import red from 'material-ui/colors/red';


import {
  EventInfo,
  Benefits
} from '../components'
import {StepForm} from '../formik'

const styles = {
  redIcon : {
    color : red[500],
    height : 30,
    width : 30
  }
}


const Visitor = ({links, classes, width}) => (

   <Grid container spacing={8} justify="space-between">

       <Grid item xs={12} sm={12} md={6} lg={5} xl={5} >

         <StepForm

           data={{}}
           ticketId={1256}
           fields={{
             email : 1,
             fname : 1,
             lname : 1,
             cname2 : 1,
             position : 1,
             phone : 1
           }}
           start={["email", "fname"]}
          />

       </Grid>


       <Grid item xs={10} sm={6} md={5} lg={3} xl={3} >

         <EventInfo
           items={[

           {
             icon : <IconLocation className={classes.redIcon} />,
             label : "event.location",
             text : "EXPO Kraków, Galicyjska 9"
           },

           {
             icon : <IconDate className={classes.redIcon}  />,
             label : "event.date",
             text : "25 kwietnia 2018"
           },

           {
             icon : <IconAlarm className={classes.redIcon}  />,
             label : "event.hours",
             text : "10:00-17:00"
           },

         ]}
         orientation="v"
       />


       </Grid>


      <Grid item xs={12} sm={6} md={12} lg={4} xl={4} >



          <Benefits
            labels={[
            "visitors.benefits.free_presentations_entry",
            "visitors.benefits.free_expo_entry",
            "visitors.benefits.free_presentations_access"
          ]}
            orientation={width === "md" ? "h" : "v"}
         />


       </Grid>

  </Grid>




)


Visitor.defaultProps = {
  links : []
}


const enhance = compose(
  withStyles(styles),
  withWidth()
)

export default enhance(Visitor)
