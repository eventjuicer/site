import { withStyles } from 'material-ui/styles';
//import withWidth from 'material-ui/utils/withWidth';
import RoleSelect from './roles'
import dynamic from 'next/dynamic'


const Visitor = dynamic(import("./roles/Visitor"))
const Exhibitor = dynamic(import("./roles/Exhibitor"))

const styles = theme => ({

  container : {

    //background: 'url(../img/header-bg.jpg) center center no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: "100vh",
    position: 'relative',
    overflow: "hidden"
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
    padding: '1rem'
  },

});

const Hero = ({videoSrc, classes}) => (

  <section className={classes.container}>
    <video autoPlay muted loop className={classes.video}>
      <source src={videoSrc} type="video/mp4" />
    </video>
    <div className={classes.overlay}>

      <RoleSelect
        
        roles={[
          {role: "exhibitor", text : "Chcę zostać wystawcą", component : Exhibitor},
          {role : "visitor", text : "Chcę zwiedzać targi", component : Visitor}
      ]}
      />

    </div>
  </section>

)


export default withStyles(styles)(Hero);
