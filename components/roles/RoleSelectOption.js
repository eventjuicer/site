
import compose from 'recompose/compose'
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';

import { MenuItem, MenuList } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';




import {dialogShow, roleSelect} from '../redux/actions'



const styles = theme => ({


  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },

  primary : {},

  icon : {}


});




const RoleSelectOption = ({role, dialogShow, roleSelect, classes}) => {

  const Component = role.component;

  return (
    <MenuItem onClick={() => roleSelect(role.role) && dialogShow({title: "test", content : <Component />}) } className={classes.menuItem}>
      <ListItemIcon className={classes.icon}>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText classes={{ primary: classes.primary }} inset primary={role.text} />
    </MenuItem>
  )
}






const enhance = compose(
  connect(null, {dialogShow, roleSelect}),
  withStyles(styles)
)

export default enhance(RoleSelectOption)
