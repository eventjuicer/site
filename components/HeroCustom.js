

import { withStyles } from 'material-ui/styles';

import Hero from './Hero'
import HeroTexts from './HeroTexts'
import Reviews from './Reviews'
import Grid from 'material-ui/Grid';

const styles = {
  container : {

    width: '80%'

    // flexDirection : 'column-reverse',
    // display : 'block',
    // position : 'relative',
    // width: '100%',
    // height : '100vh'
  },


}

const HeroCustom = ({videoSrc, classes}) => (


  <Hero videoSrc={videoSrc}>

    <div className={classes.container}>





        <Grid container spacing={8} justify="space-between">

            <Grid item xs={12} sm={12} md={12} lg={5} xl={5} >

              <Reviews  />

            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={5} xl={5} >



            </Grid>

          </Grid>

      </div>


  </Hero>


)

HeroCustom.defaultProps = {
  videoSrc : "https://s3.eu-central-1.amazonaws.com/eventjuicer-assets/video11_2.mp4"
}

export default withStyles(styles)(HeroCustom);
