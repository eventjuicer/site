
import React from 'react';

import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose'
import {translate} from '../i18n'
import _get from 'lodash/get'

import Avatar from 'material-ui/Avatar';
import Typography from './MyTypography'

const styles = (theme) => ({

  container : {
    marginLeft : 15,
    display : 'flex',
    flexDirection : 'row',
    width : '100%',
    justifyContent : 'flex-start',
    alignItems : 'center'
  },

  avatar : {
    width: 70,
    height : 70,
    marginRight: 40,
  },

});


/*

GROUP

agg : {offered: 30, sold: 27, customers: 27}
descriptions : {pl: "...", en: "...", de: ""}
id : 248
limit : 29
map : {....}
name : "Standard"
tickets : []

*/


/*
FORMDATA
{id: "booth-22-242", ti: "D 1.2"}
*/


const BoothInfoHeader = ({ group, formdata, classes, translate  }) => {

  const poolName = _get(group, "name");
  const boothName = _get(formdata, "ti");
  const backgroundColor = _get(group, "map.bgcolor");
  const border = `1px solid ${_get(group, "map.bordercolor")}`;
  const color = _get(group, "map.fontcolor");

  return (

    <div className={classes.container}>

      <Avatar className={classes.avatar} style={{backgroundColor, border, color}}>{boothName}</Avatar>

      <Typography>{poolName}</Typography>


    </div>

  )

}

const enhance = compose(
   withStyles(styles),
  // translate
)

export default enhance(BoothInfoHeader)
