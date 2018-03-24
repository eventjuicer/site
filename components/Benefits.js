import Icon from 'material-ui-icons/Done';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';

const styles = {

  container : {
    maxWidth : 400
  },
  icon : {
    color : 'green'
  }

}

const Benefits = ({classes, items}) => (
<div className={ classes.container }>

<List component="ul">

  {items.map((item, i) => <ListItem key={i}>
    <ListItemIcon><Icon className={ classes.icon }/></ListItemIcon>
    <ListItemText primary={item}  />
  </ListItem> )}

</List>

</div>
)

Benefits.defaultProps = {
  items : []
}

export default withStyles(styles)(Benefits);
