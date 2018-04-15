import React from 'react';

import Router from 'next/router'

import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui/List';

//import {  MenuItem } from 'material-ui/Menu';

import { translate } from '../i18n'


const MenuItemLink = ({to, baseLabel, label, text, icon, translate}) => (

  <ListItem button={true} onClick={()=> Router.push(to) }>
    {/* {icon && <ListItemIcon>{icon}</ListItemIcon>} */}
    <ListItemText primary={label ? translate(`common.menu.${baseLabel}.${label}`) : text} />
  </ListItem>

)


export default translate( MenuItemLink )
