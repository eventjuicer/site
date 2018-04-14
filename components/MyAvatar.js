
import React from 'react';

//import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Avatar from 'material-ui/Avatar'




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

});


const MyAvatar = ({classes, src, minimal}) => (

  <Avatar
    alt=""
    src={src}
    classes={{
      root : classes.avatar,
      img : classes.image
    }}
  />

)


MyAvatar.defaultProps = {
  minimal : true,
  src : ""
}


export default withStyles(styles, {withTheme : true})(MyAvatar)
