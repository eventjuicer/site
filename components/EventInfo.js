
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import {translate} from '../i18n'
import compose from 'recompose/compose'





const styles = {

  container : {
    maxWidth : 400,
  //  marginTop: 30
  },

}



const EventInfo = ({classes, items, translate, orientation}) => (

  <div className={ classes.container }>
    <List component="ul">
      {items.map(({label, icon, text}, i) =>
        {

          return (
            <ListItem key={i}>
              {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
              <ListItemText primary={ text }  secondary={translate(label)} />
            </ListItem>
          )
        }
     )}

    </List>
  </div>
)

EventInfo.defaultProps = {
  items : [],
  orientation : "v"
}

const enhance = compose(
  withStyles(styles),
  translate
)

export default enhance(EventInfo);
