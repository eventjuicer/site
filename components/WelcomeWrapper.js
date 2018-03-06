

import compose from 'recompose/compose'
import { connect } from 'react-redux';

import Gallery from './Gallery'
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import {roleReset} from './redux/actions'

const styles = theme => ({

  paper : {
    height : '80vh',
    marginTop : '10vh',
    padding: 30
  },

});



const Exhibitor = (props) => (

  <Paper zdepth={1} className={props.classes.paper}>

  <Button onClick={()=>props.roleReset()}>zamknij</Button>

  {props.children}

  </Paper>

)



export default compose(
  withStyles(styles),
  connect(null, {roleReset})
)(Exhibitor)
