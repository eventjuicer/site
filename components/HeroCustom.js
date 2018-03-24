

import { withStyles } from 'material-ui/styles';

import Hero from './Hero'
import HeroTexts from './HeroTexts'
import WhoIsGonnaBeThere from './WhoIsGonnaBeThere'


const styles = {
  container : {
    // flexDirection : 'column-reverse',
    display : 'block',
    position : 'relative',
    width: '100%',
    height : '100vh'
  },

  overlay : {

    zIndex: 12,
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100vh",

    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',


  }
}

const HeroCustom = ({videoSrc, classes}) => (


  <Hero videoSrc={videoSrc}>

    <div className={classes.container}>
      {/* <WhoIsGonnaBeThere /> */}

      <div className={classes.overlay}>
          <HeroTexts />
      </div>
    </div>

  </Hero>


)

HeroCustom.defaultProps = {
  videoSrc : "https://s3.eu-central-1.amazonaws.com/eventjuicer-assets/video11_2.mp4"
}

export default withStyles(styles)(HeroCustom);
