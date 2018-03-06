
import Gallery from './Gallery'
import { withStyles } from 'material-ui/styles';
import Layout from './WelcomeWrapper'


import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

const styles = theme => ({

  paper : {
    height : '80vh',
    marginTop : '10vh',
    padding: 30
  },

});



const Exhibitor = (props) => (

  <Layout>

  <Grid container spacing={8} justify="space-around">

       <Grid item xs={10} sm={6} md={4} lg={4} xl={4} >

         <Paper zdepth={2}>
           test
         </Paper>
       </Grid>

      <Grid item xs={10} sm={6} md={4} lg={4} xl={4} >


        <Paper zdepth={2}>

          <Gallery />

        </Paper>

       </Grid>

  </Grid>

    </Layout>

)







export default withStyles(styles)(Exhibitor)
