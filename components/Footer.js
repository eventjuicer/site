

import compose from 'recompose/compose'
import Grid from 'material-ui/Grid';
import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';

import IconDate from 'material-ui-icons/DateRange';
import IconLocation from 'material-ui-icons/LocationOn';
import IconAlarm from 'material-ui-icons/Alarm';
import red from 'material-ui/colors/red';


import EventInfo from './EventInfo'
import Person from './PersonSlim'
import Typography from './MyTypography'

import Wrapper from './Wrapper'



const styles = theme => ({

  container : {

    borderTop : '1px solid #cccccc'
  },

  paper : {
    padding: 30
  },

  redIcon : {
    color : red[500],
    height : 30,
    width : 30
  }

});


const Footer = ({links, classes, width}) => (

  <div className={classes.container}>

  <Wrapper dense={true} color="#fafafa">

   <Grid container spacing={8} justify="space-around" alignItems="center">


           <Grid item xs={12} sm={12} md={12} lg={5} xl={5} >


             <Person />


            </Grid>




       <Grid item xs={12} sm={6} md={5} lg={3} xl={3} >

         <EventInfo
           items={[

           {
             icon : <IconLocation className={classes.redIcon} />,
             label : "event.location",
             text : "Kraków"
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



       <Grid item xs={12} sm={6} md={6} lg={4} xl={3} >


         <Typography></Typography>


         <EventInfo
           items={[

           {
             label : "event.organizer.name",
             text : "Infoguru Sp. z o.o."
           },

           {
             label : "event.organizer.address",
             text : "POLAND, Poznań, Truskawiecka 13"
           },

           {
             label : "event.organizer.registration",
             text : "EU VAT ID PL7811883511"
           },

         ]}
         orientation="v"
       />



       </Grid>







  </Grid>

</Wrapper>
</div>

)


Footer.defaultProps = {
  links : []
}


const enhance = compose(
  withStyles(styles)
)

export default enhance(Footer)
