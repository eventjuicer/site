

import { withStyles } from 'material-ui/styles';
//import Grid from 'material-ui/Grid';



import Hero from './Hero'
//import HeroTexts from './HeroTexts'
import Reviews from './Reviews'
import Video from './Video'



const styles = {

  container : {
    width: '100%',
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center'
  },


}

const HeroCustom = ({videoSrc, classes}) => (


  <Hero videoSrc={videoSrc}>

    <div className={classes.container}>

      <Reviews  />

      <Video />

    </div>

  </Hero>


)

HeroCustom.defaultProps = {
  videoSrc : "https://s3.eu-central-1.amazonaws.com/eventjuicer-assets/video11_2.mp4"
}

export default withStyles(styles)(HeroCustom);
