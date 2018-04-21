import React from 'react'
import { withStyles } from 'material-ui/styles';
import Chip from 'material-ui/Chip';
import red from 'material-ui/colors/red';


const styles = theme => ({

  chip : {
      margin: theme.spacing.unit,
  },

  venue : {
    backgroundColor : red[500],
    color : '#ffffff'
  }

})


const PresentationLabel = ({time, venue, classes}) => <div>
  <Chip label={time} className={classes.chip} />
  <Chip label={venue} className={classes.chip} classes={{
    root : classes.venue
  }} />
</div>

export default withStyles(styles)(PresentationLabel)
