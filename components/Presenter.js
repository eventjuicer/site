
 // <Tags tags={_get(company.profile, "keywords")} />

import React from 'react';

//import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
//import classNames from 'classnames'

import Divider from 'material-ui/Divider'

import Typography from './MyTypography'
import Tags from './Tags'



import Card, { CardContent, CardHeader } from 'material-ui/Card';
//import Button from 'material-ui/Button';


const styles = {

}

const Presenter = ({data}) => {

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

    <div style={{marginTop: 30}}>

      <Typography template="presenter1">{`${fname} ${lname}`}</Typography>

      <Typography template="presenter2">{`${position} ${cname2}`}</Typography>

      <Typography template="presenterText">{bio}</Typography>

    </div>
)
}


Presenter.defaultProps = {
  data : {}
}


export default withStyles(styles)(Presenter)
