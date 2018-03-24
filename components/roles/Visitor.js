
import { withStyles } from 'material-ui/styles';



import Grid from 'material-ui/Grid';

import Benefits from '../Benefits'
import VisitorForm from '../../formik/Visitor'
import RoleWrapper from './RoleWrapper'

const styles = theme => ({

  paper : {
    padding: 30
  },

});



const Visitor = ({classes}) => (

<RoleWrapper>

   <Grid container spacing={8} justify="space-around">

       <Grid item xs={10} sm={6} md={4} lg={4} xl={4} >


         <VisitorForm user={{ email: '', firstName: 'ggg', lastName: '' }} />


       </Grid>

      <Grid item xs={10} sm={6} md={4} lg={4} xl={4} >

          <Benefits items={[
            "Bezpłatny udział w prezentacjach",
            "Bezpłatne zwiedzanie Targów",
            "Bezpłatny dostęp do prezentacji w PDF"]} />

       </Grid>

  </Grid>



</RoleWrapper>

)







export default withStyles(styles)(Visitor)
