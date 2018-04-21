

import React from 'react';
//import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from './MyTypography'

// <Tags tags={_get(company.profile, "keywords")} />

const styles = {
  root : {
    marginBottom : 10
  },

}

const Presentation = ({classes, title, description, compact}) => {

  return (

    <div className={classes.root}>

      <Typography template="presenter2">{title}</Typography>

      <Typography template="presenterText">{description}</Typography>

    </div>

  )
}


Presentation.defaultProps = {
  title : "",
  description : "",
  compact : false
}


export default withStyles(styles)(Presentation)
