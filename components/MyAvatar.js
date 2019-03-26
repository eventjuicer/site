import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  avatar: {
    width: 100,
    height: 100,

    [theme.breakpoints.up('sm')]: {
      width: 250,
      height: 250
    }
  },

  image: {
    filter: 'grayscale(100%) contrast(115%)'
  }
});

const MyAvatar = ({ classes, src, link, grayscale }) => (
  <Avatar
    alt=""
    src={src}
    classes={{
      ...{root: classes.avatar},
      ...(grayscale && {img: classes.image})
    }}
  />
);

MyAvatar.defaultProps = {
  src: '',
  grayscale : false
};

export default withStyles(styles)(MyAvatar);
