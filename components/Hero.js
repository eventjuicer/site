
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import withWidth from 'material-ui/utils/withWidth';
import Hidden from 'material-ui/Hidden';

import Typist from 'react-typist';

const styles = {

  container : {

    background: 'url(../img/header-bg.jpg) center center no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    minHeight: "100%",
    position: 'relative',
    overflow: "hidden"

  },
  h1 : {
    fontSize : '5rem',
    textTransform: 'uppercase',
    fontWeight : 900,
    color: 'white'
  },
  video : {

      right: 0,
      bottom: 0,
      minWidth: "100%",
      minHeight: "100%",
      width: "auto",
      height: "auto",
      zIndex: -1000,
      overflow: "hidden",
  },
  overlay : {
    flexGrow: 1,
    position: 'absolute',
    top: '50%',
    left: '10%',
    right: 0,
    marginTop: -195
  }
};

class Hero extends React.Component {

  componentDidMount()
  {
    if(this.videoEl && this.videoEl.readyState >= 3)
    {
      console.log("jedziemy!");
    }
  }

  render()
  {
    const { classes, videoSrc } = this.props;
    return (
      <section className={classes.container}>

      <Hidden only={['sm', 'xs']}>
      <video ref={(el) => { this.videoEl = el; }} autoPlay muted loop className={classes.video}>
      <source src={videoSrc} type="video/mp4" />
      </video>
      </Hidden>

      <div className={classes.overlay}>
          <Typist  startDelay={3000}>

            <Typography variant="headline" component="h1" className={classes.h1}>co tam?</Typography>
             <Typist.Backspace count={8} delay={500} />
              <Typography variant="headline" component="h1" className={classes.h1}>będziesz na Targach?</Typography>

          </Typist>

      </div>
    </section>
)
  }

}

export default compose(withStyles(styles), withWidth())(Hero);
