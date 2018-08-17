//import PropTypes from 'prop-types';

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { isBigScreen } from '../helpers';

const styles = theme => ({
  container: {

    backgroundRepeat: 'no-repeat no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: '100vh',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',

    "&:before" : {
      content: "''",
      position: 'absolute',
      top:0,
      right:0,
      left:0,
      bottom:0,
      zIndex: 9,
      background: 'linear-gradient(to right,rgba(230, 0, 0, 0.4), rgba(250, 0, 0, 0.9))',
      overflow: 'hidden',
    }

  },


  video : {

    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
  },

  overlay: {
    zIndex: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },

  h1: {}
});

const Hero = ({ width, videoSrc, background, classes, children }) => (

  <section className={classes.container}
    style={{ backgroundImage: `url(${background})` }}
    >

    <div className={classes.overlay}>{children}</div>

    {isBigScreen(width) && videoSrc ? (

      <video autoPlay muted loop className={classes.video}>
        <source src={videoSrc} type="video/mp4" />
      </video>

    ) : null}


  </section>

);

Hero.defaultProps = {
  width: 'xs',
  background:
    'https://res.cloudinary.com/eventjuicer/image/upload/v1523564269/welcome1.jpg',
  videoSrc:
    'https://res.cloudinary.com/eventjuicer/video/upload/v1534454501/video_presenter_blak.mp4',
  label: null,
  text: ''
};
//  'https://s3.eu-central-1.amazonaws.com/eventjuicer-assets/video11_2.mp4',


const enhance = compose(
  connect(state => ({ width: state.app.width })),
  withStyles(styles)
);

export default enhance(Hero);
