


//import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames'
//import withWidth from 'material-ui/utils/withWidth';

import Avatar from 'material-ui/Avatar'

const styles = {

  avatar : {
    width: 200,
    height: 200,

  },

  avatarMobile : {
    width: 100,
    height: 100,
  },

  avatarImg : {
     filter: 'grayscale(100%) contrast(115%)',
  },

};


const MyAvatar = ({classes, src, minimal}) => (

  <Avatar
    alt=""
    src={src}
    classes={{
      root : classNames(classes.avatar,{
        [classes.avatarMobile] : minimal
      }),
      img : classes.avatarImg
    }}
  />

)


MyAvatar.defaultProps = {
  minimal : true,
  src : ""
}


export default withStyles(styles)(MyAvatar)
