//import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose'


import {isBigScreen} from '../helpers'

const styles = theme => ({

  container : {

    background: `url('https://res.cloudinary.com/eventjuicer/image/upload/v1523564269/welcome1.jpg') center center no-repeat`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: "100vh",
    width: '100%',
    position: 'relative',
    overflow: "hidden",

  },

  video : {
    zIndex: -1,
    bottom: 0,
    right: 0,
    minWidth: "100%",
    minHeight: "100%",
    width: "auto",
    height: "auto",

    overflow: "hidden",

  },

  overlay : {
    zIndex: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100vh",

    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',


  },

});




const Hero = ({width, videoSrc, background, classes, children}) => (

  <section className={classes.container}>

    {isBigScreen(width) && videoSrc ? <video autoPlay muted loop className={classes.video}>
        <source src={videoSrc} type="video/mp4" />
      </video> : null
    }

    <div className={classes.overlay}>

    {children}

    </div>
  </section>

)

Hero.defaultProps = {
  width : "xs",
  videoSrc : null
}

const enhance = compose(
  connect( (state) => ({width : state.app.width}) ),
  withStyles(styles)
)


export default enhance(Hero);
