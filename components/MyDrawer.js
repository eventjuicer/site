
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import compose from 'recompose/compose'



import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';

import {drawerHide} from './redux/actions'


const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class MyDrawer extends React.PureComponent {

  handleClose = () => {

  }

  render() {

    const { classes, drawer, drawerHide } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List></List>
        <Divider />
        <List></List>
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List>asd</List>
        <Divider />
        <List>dss</List>
      </div>
    );

    return (

        <Drawer open={drawer} onClose={drawerHide}>
          <div
            tabIndex={0}
            role="button"
            onClick={drawerHide }
            onKeyDown={drawerHide }
          >
            {sideList}
          </div>
        </Drawer>


    );
  }
}

MyDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const enhance = compose(
  connect((state) => ({drawer : state.drawer}), {drawerHide}),
  withStyles(styles)
)

export default enhance(MyDrawer);
