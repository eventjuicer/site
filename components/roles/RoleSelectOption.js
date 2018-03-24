
import compose from 'recompose/compose'
import { connect } from 'react-redux';


import { withStyles } from 'material-ui/styles';
import { MenuItem, MenuList } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';


import {translate} from '../../i18n'
import {roleSelect} from '../redux/actions'



const styles = theme => ({


  menuItem: {

    fontSize : '2rem',
    border: '1px solid #ccc',


    // '&:focus': {
    //   backgroundColor: theme.palette.primary.main,
    //   '& $primary, & $icon': {
    //     color: theme.palette.common.white,
    //   },
    // },
  },

  primary : {
      fontSize : '2rem',
  },

  icon : {

  },

  h : {

  },

  v : {

  }

});




const RoleSelectOption = ({role, selectedRole, dialogShow, roleSelect, classes, translate, orientation}) => {

  return (
    <MenuItem selected={selectedRole === role} className={classes.menuItem} onClick={ () => roleSelect(role) } className={classes.menuItem}>
      <ListItemIcon className={classes.icon}>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText classes={{ primary: classes.primary }} inset primary={translate(`${role}`)} />
    </MenuItem>
  )
}


const enhance = compose(
  connect((state) => ({selectedRole : state.app.role}), {roleSelect}),
  withStyles(styles),
  translate
)

export default enhance(RoleSelectOption)
