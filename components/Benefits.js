
import compose from 'recompose/compose'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles';


import Icon from 'material-ui-icons/Done';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import {translate} from '../i18n'

const styles = {

  container : {
    maxWidth : '100%',
  //  marginTop: 30
  },
  flexList : {
      display: 'flex',
      alignItems: 'flex-start'
  },
  item : {

  },
  icon : {
    color : 'green'
  },

  iconFlex : {

  },

  flex : {
      display: 'flex',
      justifyContent : 'center', /*space-around space-between*/
      alignItems : 'flex-start',
      flexDirection : 'row',

  }

}

const Benefits = ({classes, labels, translate, orientation}) => (

  <div className={ classes.container }>
    <List component="ul" className={classNames({

      [classes.flex] : (orientation === "h")
    })}>
      {labels.map((label, i) => <ListItem className={classNames({
          [classes.flexList] : (orientation === "h"),
      })} key={i}>
        <ListItemIcon><Icon className={ classes.icon }/></ListItemIcon>
        <ListItemText primary={translate(label)}  />
      </ListItem> )}
    </List>
  </div>
)

Benefits.defaultProps = {
  labels : [],
  orientation : "v"
}


const enhance = compose(
  translate,
  withStyles(styles),
)

export default enhance(Benefits);
