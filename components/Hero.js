import { withStyles } from 'material-ui/styles';
//import withWidth from 'material-ui/utils/withWidth';

const styles = theme => ({

  container : {

    //background: 'url(../img/header-bg.jpg) center center no-repeat',
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

const Hero = ({videoSrc, background, classes, children}) => (

  <section className={classes.container}>

    {videoSrc && <video autoPlay muted loop className={classes.video}>
        <source src={videoSrc} type="video/mp4" />
      </video>
    }

    <div className={classes.overlay}>

    {children}

    </div>
  </section>

)



export default withStyles(styles)(Hero);
