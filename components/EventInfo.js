import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import {translate} from '../i18n'
import compose from 'recompose/compose'
import classNames from 'classnames'

import Icon from './Icon'


const styles = {

  h : {
    display : 'flex',
    flexDirection : 'row'
  },

  v : {
      maxWidth : 400,
  },

  pr_black : {

  },

  sec_black : {

  },

  pr_white : {
    color : '#ffffff',
    fontSize : '2rem'
  },

  sec_white : {
    color : '#ffffff',
    fontSize : '1.5rem'
  },

}



const EventInfo = ({classes, items, translate, orientation, color}) => (

    <List component="ul" className={classes[orientation]}>
      {items.map(({label, icon, text}, i) =>
        {

          return (
            <ListItem key={i}>
              {icon ? <ListItemIcon><Icon name={icon} variant="red" /></ListItemIcon> : null}
              <ListItemText
                  primary={ text }
                  secondary={translate(label)}
                  classes={{
                    primary : classes["pr_" + color],
                    secondary: classes["sec_" + color]
                  }}
              />
            </ListItem>
          )
        }
     )}

    </List>

)

EventInfo.defaultProps = {
  items : [],
  orientation : "v",
  color : "black"
}

const enhance = compose(
  withStyles(styles),
  translate
)

export default enhance(EventInfo);
