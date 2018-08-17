
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from './MyTypography'
import School from '@material-ui/icons/School'
import { FaHandshake as Handshake } from 'react-icons/fa';


const styles = theme => ({

  container : {
    display: 'flex',
    flexDirection : 'row',
    justifyContent : 'center'
  },

  iconContainer : {

  //  width: 150
  },

  icon : {

    width : 80,
    height : 80,

    [theme.breakpoints.down('md')]: {
      width : 70,
      height : 70,
    },

    color : 'red'
  },

  texts : {
    marginLeft : 30
  }

})

const GridBenefitsItem = ({classes, icon, headline, text}) => (

  <Grid item xs={12} sm={6} lg={4} xl={4}>

    <div className={classes.container}>

      <div className={classes.iconContainer}>
        <Handshake className={classes.icon} />
      </div>

      <div className={classes.texts}>
        <Typography template="benefitsTitle" label={headline} />
        <Typography template="benefitsText" label={text} />
      </div>

    </div>

  </Grid>

)

GridBenefitsItem.defaultProps = {

}

export default withStyles(styles)(GridBenefitsItem)
