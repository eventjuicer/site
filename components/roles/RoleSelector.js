
import { MenuList } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import RoleSelectOption from './RoleSelectOption'


const styles = theme => ({
  list: {
     minWidth: 300,
     maxWidth: 500,
     backgroundColor: theme.palette.background.paper,
     opacity: 0.9
   },
})

const RoleSelector = ({classes, roles}) => (
  <MenuList className={classes.list}>
  {roles.map((role, idx) => <RoleSelectOption key={idx} role={role} /> )}
  </MenuList>
)

export default withStyles(styles)(RoleSelector)
