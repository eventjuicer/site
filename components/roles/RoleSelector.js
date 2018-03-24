
import { MenuList } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import RoleSelectOption from './RoleSelectOption'
import classNames from 'classnames'

const styles = theme => ({
  list: {

   },
   v : {
     minWidth: 300,
     maxWidth: 500,
  //   backgroundColor: theme.palette.background.paper,
     opacity: 0.9
   },
   h : {
     maxWidth : '100%',
     display : 'flex',
     justifyContent : 'center',
     alignItems : 'center',
   }
})

const RoleSelector = ({classes, roles, orientation}) => (
  <MenuList className={classNames(classes.list, classes[orientation])}>
  {roles.map((role, idx) => <RoleSelectOption key={idx} role={role} orientation={orientation} /> )}
  </MenuList>
)

RoleSelector.defaultProps = {
  orientation : "v"
}

export default withStyles(styles)(RoleSelector)
