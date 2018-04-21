
import React from 'react'
import Avatar from 'material-ui/Avatar'
import { withStyles } from 'material-ui/styles'

import _get from 'lodash/get'
import {getCompanyLogotype} from '../helpers'

const styles = {

  root : {
    display : 'flex',
    alignItems: 'center',
    marginTop : 10,
    marginBottom : 35,
  },

  avatar : {
     width : 60,
     height : 60,
     fontSize : 25,
     fontWeight : 900
  },

  logotype : {
    maxWidth : 200,
    maxHeight : 60,
    marginLeft : 50
  }
}

const ScheduleVenue = ({name, company, classes}) => (
  <div className={classes.root}>
    <div>
      <Avatar className={classes.avatar}>{name}</Avatar>
    </div>
    <div>
      <img src={ getCompanyLogotype(company) } className={classes.logotype} alt="" />
    </div>
  </div>
)

export default withStyles(styles)(ScheduleVenue)
