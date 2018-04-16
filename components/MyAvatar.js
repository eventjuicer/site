
import React from 'react';

//import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles'
import Router from 'next/router'

import Avatar from 'material-ui/Avatar'
import classNames from 'classnames'

const styles = theme => ({

  avatar : {

    width: 100,
    height: 100,

    [theme.breakpoints.up('sm')]: {
      width: 250,
      height: 250,
    },
  },

  image : {
     filter: 'grayscale(100%) contrast(115%)',
  },

  linked : {
    cursor : 'pointer'
  }

});


const MyAvatar = ({classes, src, minimal, link, router}) => (

  <Avatar
    alt=""
    src={src}
    classes={{
      root : classes.avatar,
      img : classNames(classes.image, {
        [classes.linked] : link
      })
    }}
    onClick={ (e) => link ? Router.push(link) : e.preventDefault() }
  />

)


MyAvatar.defaultProps = {
  minimal : true,
  src : "",
  link : null
}


export default withStyles(styles, {name : "MyAvatar"})(MyAvatar)
