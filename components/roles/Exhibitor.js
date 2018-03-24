import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';



import SupportPeople from '../SupportPeople'
import Benefits from '../Benefits'
import Bookingmap from '../Bookingmap'

const styles = theme => ({

  paper : {
    height : '80vh',
    marginTop : '10vh',
    padding: 30
  },

});



const Exhibitor = (props) => (


  <div>

    <Grid container spacing={8} justify="space-around" alignItems="center">

         <Grid item xs={10} sm={6} md={6} lg={6} xl={6} >
             <SupportPeople />

         </Grid>

        <Grid item xs={10} sm={6} md={6} lg={6} xl={6} >

          <Benefits items={[
            "Przestrzeń wystawiennicza",
            "Katalog wystawców",
            "Prąd",
            "Catering"
          ]} />

         </Grid>

    </Grid>

    <Bookingmap />

  </div>
 

)



export default withStyles(styles)(Exhibitor)
