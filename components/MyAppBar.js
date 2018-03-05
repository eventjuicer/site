

import Link from 'next/link'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import compose from 'recompose/compose'



import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import {drawerShow} from '../redux/actions'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
    cursor: 'pointer',
  },
  title: {
   cursor: 'pointer',
 },
 subtitle: {
  fontWeight : 300
},
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {

  const { classes, drawer, drawerShow } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          {/* <IconButton onClick={drawerShow} className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}

          <Link href="/">
          <Typography component="a" variant="title" color="inherit" className={classes.flex}>
          Targi eHandlu <span className={classes.subtitle}>Kraków 25 kwietnia 2018</span>
          </Typography>
          </Link>


          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };



const enhance = compose(
  connect((state) => ({drawer : state.drawer}), {drawerShow}),
  withStyles(styles)
)


export default enhance(ButtonAppBar);
