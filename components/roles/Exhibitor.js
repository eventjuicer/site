import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import Wrapper from './Wrapper'
import SupportPeople from '../SupportPeople'

const styles = theme => ({

  paper : {
    height : '80vh',
    marginTop : '10vh',
    padding: 30
  },

});



const Exhibitor = (props) => (

  <Wrapper>

    <Grid container spacing={8} justify="space-around">

         <Grid item xs={10} sm={6} md={4} lg={4} xl={4} >

           {/* <Paper zdepth={2}> */}

             <SupportPeople />

           {/* </Paper> */}
         </Grid>

        <Grid item xs={10} sm={6} md={4} lg={4} xl={4} >


          <Paper zdepth={2}>

          </Paper>

         </Grid>

    </Grid>

  </Wrapper>

)



export default withStyles(styles)(Exhibitor)
