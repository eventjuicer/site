import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import {MyTypography, Reviews, FsVideo } from '../components';
import {translate} from '../i18n'


const styles = {
  container: {
    marginTop: -30,
    // width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const VideoWithReviews = ({ classes, locale }) => (

  <FsVideo videoSrc="https://res.cloudinary.com/eventjuicer/video/upload/v1534461948/video_quicktour1.mp4">
    <Reviews locale={locale} />
  </FsVideo>
);

const enhance = compose(
  translate,
  withStyles(styles)
)

export default enhance(VideoWithReviews);
