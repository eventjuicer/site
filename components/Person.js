import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose'
import classNames from 'classnames'


import Card, { CardContent, CardHeader, CardActions } from 'material-ui/Card';
//import Button from 'material-ui/Button';

import Avatar from './MyAvatar'
import Typography from './MyTypography'

import {MyLink} from '../next'
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




class Person extends React.PureComponent {


  // isMobile()
  // {
  //   const { width } = this.props;
  //   return width === "xs"
  // }

  render()
  {
    const { classes, avatar, title, subtitle, text, minimal, link, id } = this.props;
    const linkParams = generateLinkParams(title, "speaker", id);

    return (

      <Card className={classNames(classes.card, {
        [classes.cardMobile] : minimal
      }
      )} elevation={0}>

      {/* <CardMedia
        className={classes.media}
        image="https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      /> */}

      <CardHeader

        avatar={
      <Avatar
          alt=""
          src={avatar}
          minimal={minimal}
          link={linkParams.as}
        />}
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

        {!minimal && text ? <Typography template="presenterText">
          { text }
        </Typography> : null }

      </CardContent>

    {link &&  <CardActions>
        <MyLink {...linkParams} label="common.more" />
      </CardActions>}


    </Card>


    );


  }


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

const enhance = compose(
  withStyles(styles),
//  withWidth()
)

export default enhance(Person);
