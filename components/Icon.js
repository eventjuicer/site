
import React from 'react'

import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import red from 'material-ui/colors/red';

import { capitalizeFirstLetter } from '../helpers'


import {
  Linkedin,
  Facebook,
  Twitter,
  Web as Website,
  CalendarRange as Date,
  MapMarker as Location,
  Alarm
} from 'mdi-material-ui'

const icons = {Linkedin, Facebook, Twitter, Website, Date, Location, Alarm}



const styles = theme => ({

  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  small: {
    fontSize: 20,
  },

  red : {
    color : red[500],
    height : 30,
    width : 30
  }

})

const Icon = ({name, classes, variant}) => {

  const capName = capitalizeFirstLetter(name);

  const IconComponent = icons[capName]

  const ret = <IconComponent className={classNames(classes.leftIcon, classes[variant] )} />

  return React.isValidElement( ret ) ? ret : null
  
}

Icon.defaultProps = {
  variant : "small"
}

export default withStyles(styles)(Icon)
