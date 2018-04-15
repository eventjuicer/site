
 // <Tags tags={_get(company.profile, "keywords")} />

import React from 'react';

//import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Typography from './MyTypography'


const styles = {
  root : {
    marginBottom : 10
  }
}

const Presentation = ({classes, data, addPresenterInfo}) => {

  const {
    bio,
    cname2,
    fname,
    lname,
    position,
    presentation_description,
    presentation_time,
    presentation_venue,
    presentation_title
  } = data;

  return (

    <div className={classes.root}>

      <Typography template="presenter2">{presentation_title}</Typography>

      <Typography template="presenterText">{presentation_description}</Typography>

    </div>

  )
}


Presentation.defaultProps = {
  data : {},
  addPresenterInfo : false
}


export default withStyles(styles)(Presentation)
