import dynamic from 'next/dynamic'
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import withWidth from 'material-ui/utils/withWidth';
import Hidden from 'material-ui/Hidden';

//import Typist from 'react-typist';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';


const Visitor = dynamic(import("./WelcomeVisitor"))
const Exhibitor = dynamic(import("./WelcomeExhibitor"))
import Welcome from './WelcomeGeneral'

const styles = theme => ({



  container : {

    //background: 'url(../img/header-bg.jpg) center center no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    minHeight: "100%",
    position: 'relative',
    overflow: "hidden"

  },
  h1 : {
    fontSize : '6vh',
    textTransform: 'uppercase',
    fontWeight : 900,
    color: 'white'
  },

  headingSmaller : {
    // fontSize : '5vh',
    // textTransform: 'uppercase',
    // fontWeight : 900,
    // color: 'white'
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
    top: 0,
    left: 0,
    right: 0,
    padding: '5vh'
  },

  paper : {
    height : '80vh',
    marginTop : '10vh',
    padding: 30
  },




});

class Hero extends React.Component {

  state = {
    role : ""
  }

  componentDidMount()
  {
    if(this.videoEl && this.videoEl.readyState >= 3)
    {
  //    console.log("jedziemy!");
    }
  }



  render()
  {
    const { classes, videoSrc, width, app } = this.props;
    const { role} = this.state;

    return (
      <section className={classes.container}>

      <Hidden only={['sm', 'xs']}>
      <video ref={(el) => { this.videoEl = el; }} autoPlay muted loop className={classes.video}>
      <source src={videoSrc} type="video/mp4" />
      </video>
      </Hidden>

      <div className={classes.overlay}>

        {app.role === "visitor" && <Visitor />}

        {app.role === "exhibitor" && <Exhibitor />}

        <Welcome items={[
          {role: "exhibitor", text : "Chcę zostać wystawcą"},
          {role : "visitor", text : "Chcę zwiedzać targi"}
        ]} />

      </div>
    </section>
)
  }

}

export default compose(
  connect((state) => ({app : state.app}), {}),
  withStyles(styles),
  withWidth()
)(Hero);
