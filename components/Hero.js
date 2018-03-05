
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import withWidth from 'material-ui/utils/withWidth';
import Hidden from 'material-ui/Hidden';

//import Typist from 'react-typist';
import Gallery from '../components/Gallery'
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

 import { MenuItem, MenuList } from 'material-ui/Menu';
 import Slide from 'material-ui/transitions/Slide';

const styles = theme => ({


  list: {
   width: '100%',
   maxWidth: 360,
   backgroundColor: theme.palette.background.paper,
 },

  container : {

    //background: 'url(../img/header-bg.jpg) center center no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    minHeight: "100%",
    position: 'relative',
    overflow: "hidden"

  },
  h1 : {
    fontSize : '10vh',
    textTransform: 'uppercase',
    fontWeight : 900,
    color: 'white'
  },

  headingSmaller : {
    fontSize : '5vh',
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
    top: 0,
    left: 0,
    right: 0,
  //  marginTop: -300
  },

  paper : {
    height : '80vh',
    marginTop : '10vh',
    padding: 30
  },

  texts : {

    marginTop: '10vh'

  },

  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},

});

class Hero extends React.Component {

  state = {

    optionsShown : false,
    headingBig : true
  }


  componentDidMount()
  {
    if(this.videoEl && this.videoEl.readyState >= 3)
    {
  //    console.log("jedziemy!");
    }
  }

  showOptions = () =>
  {
    this.setState({optionsShown : true, headingBig : false})
  }

  render()
  {
    const { classes, videoSrc } = this.props;
    const { optionsShown, headingBig} = this.state;

    return (
      <section className={classes.container}>

      <Hidden only={['sm', 'xs']}>
      <video ref={(el) => { this.videoEl = el; }} autoPlay muted loop className={classes.video}>
      <source src={videoSrc} type="video/mp4" />
      </video>
      </Hidden>

      <div className={classes.overlay}>

          <Grid container spacing={8} justify="space-around">

               <Grid item xs={10} sm={6} md={4} lg={4} xl={4} >

                 <div className={classes.texts}>

<Slide in={true} style={{ transitionDelay:  1000 }}>

     <Typography variant="headline" component="h1" className={headingBig ? classes.h1 : classes.headingSmaller}>
       co tam, jak tam?
     </Typography>

</Slide>

<Typography variant="headline" component="h1" className={headingBig ? classes.h1 : classes.headingSmaller}>
  będziesz na Targach?
</Typography>


 {optionsShown && <div className={classes.list}>

     <MenuList>
         <MenuItem className={classes.menuItem}>Chcę uczestniczyć w roli zwiedząjącego</MenuItem>
         <MenuItem className={classes.menuItem}>Chcę zostać wystawcą</MenuItem>

    </MenuList>

</div>}

  </div>

               </Grid>

              <Grid item xs={10} sm={6} md={4} lg={4} xl={4} >

                  <Paper zdepth={5} className={classes.paper}><Gallery /></Paper>

               </Grid>


          </Grid>





      </div>
    </section>
)
  }

}

export default compose(withStyles(styles), withWidth())(Hero);
