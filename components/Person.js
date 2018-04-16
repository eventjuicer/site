

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames'


import Card, { CardContent, CardHeader, CardActions } from 'material-ui/Card';
//import Button from 'material-ui/Button';

import Avatar from './MyAvatar'
import Typography from './MyTypography'

import {MyLink} from '../next'
import Hidden from 'material-ui/Hidden'

import {generateLinkParams} from '../helpers'

const styles = {

  avatarContainer : {
   display: 'flex',
   justifyContent : 'center'
  },


  card: {
    width: '100%',
    maxWidth : 400
  },

  cardMobile : {

  },

  // media: {
  //   height: 200,
  // },

  bio : {
    marginTop : 10
  }
};




const Person = ( { classes, avatar, title, subtitle, text, minimal, link, id } ) => {

  const linkParams = generateLinkParams(title, "speaker", id)

  return (

    <Card
      className={classes.card}
      elevation={0}>

    <CardHeader
      avatar={
          <Avatar
              alt=""
              src={avatar}
              link={linkParams.as}
            />
    }
      // title="test"
      // subheader="srest"
      className={classes.avatarContainer}
   />

    <CardContent>

      <Typography template="presenter1">
        {title}
      </Typography>

      {subtitle && <Typography template="presenter2">
        {subtitle}
      </Typography>}

      <Hidden smDown implementation="css">
        {text && <Typography template="presenterText">
          { text }
        </Typography>}
       </Hidden>

    </CardContent>

    {link && <CardActions>
      <MyLink {...linkParams} label="common.more" />
    </CardActions>}


  </Card>

  )
}


Person.defaultProps = {
  width : "md",
  minimal : true,
  link : false
}

Person.propTypes = {
  classes: PropTypes.object.isRequired,
  avatar : PropTypes.string.isRequired,
  title : PropTypes.node,
  subtitle : PropTypes.node,
  text : PropTypes.node,
};

export default withStyles(styles)(Person);
