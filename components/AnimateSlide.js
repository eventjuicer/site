
import React from 'react';
import Slide from 'material-ui/transitions/Slide';
import withWidth from 'material-ui/utils/withWidth';
import {isBigScreen} from '../helpers'


const AnimateSlide = ({visible, width, children, onShow}) => (
  isBigScreen(width) ?
  <Slide in={visible} style={{ transitionDelay:  1000 }} direction="up" mountOnEnter unmountOnExit onEntered={() => onShow() }>
    {children}
  </Slide> : children
)

AnimateSlide.defaultProps = {
  onShow : function(){},
  visible : true
}

export default withWidth()(AnimateSlide);
