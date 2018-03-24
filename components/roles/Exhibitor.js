import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';


import RoleWrapper from './RoleWrapper'

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

  <RoleWrapper>
  <div>

    <Grid container spacing={8} justify="space-around" alignItems="center">

         <Grid item xs={10} sm={6} md={6} lg={6} xl={6} >

           {/* <Paper zdepth={2}> */}

             <SupportPeople />

           {/* </Paper> */}
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

  </RoleWrapper>

)



export default withStyles(styles)(Exhibitor)
