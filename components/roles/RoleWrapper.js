

import compose from 'recompose/compose'
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import {roleReset} from '../redux/actions'
import Button from '../MyButton';
import Paper from 'material-ui/Paper';


const styles = {
  container : {
    // backgroundColor : '#ffffff',
    //
    // width : '100%',
    // minHeight : '100vh'

  },
  role : {

  },
  paper : {
    margin : '.5rem',
    padding: 30,
    backgroundColor : '#ffffff'
  },

}


const RoleWrapper = ({roleReset, classes, children}) => (

  <div className={classes.container}>

      <Paper zdepth={2} className={classes.paper}>

    <Button variant="raised" onClick={roleReset} label="closes"/>

    <div className={classes.role}>
      {children}
    </div>

  </Paper>

  </div>
)


const enhance = compose(
    withStyles(styles),
    connect(null, {roleReset})
)

export default enhance(RoleWrapper)
