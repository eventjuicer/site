

import compose from 'recompose/compose'
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import {roleReset} from '../redux/actions'

const styles = theme => ({
  paper : {
    height : '80vh',
    marginTop : 0,
    padding: '3rem'
  },
});


const Wrapper = (props) => (
  <Paper zdepth={1} className={props.classes.paper}>
  <Button onClick={()=>props.roleReset()}>zamknij</Button>
  {props.children}
  </Paper>
)

export default compose(
  withStyles(styles),
  connect(null, {roleReset})
)(Wrapper)
