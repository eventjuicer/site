

import { withStyles } from 'material-ui/styles';
import * as Typography from './MyTypography';






const styles = () => ({


    title : {
      fontSize : '3rem',
      textTransform: 'uppercase',
      fontWeight : 100,
      marginBottom: '2rem',
      textAlign: 'center'
    },

    section : {

        display: 'block',
        minHeight: 350,
        backgroundColor: '#fff',
        paddingBottom: '5rem',
        paddingTop: '5rem',
        overflow: 'hidden',
        position: 'relative',

    },

    overlay : {
    //   background: '#25201f',
    //    opacity: '.8',
        position: 'absolute',
        zIndex: 0,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0

    },

    container : {
      width: '90%',
      maxWidth : 1600,
      margin : '0 auto',
      zIndex: 111,
    }

})




const Wrapper = (props) => (

  <section className={props.classes.section}>
    {/* <div className={props.classes.overlay}>

    </div> */}
    <div className={props.classes.container}>
      {props.title && <Typography.H1C className={props.classes.title}>{props.title}</Typography.H1C>}
      {props.children}
    </div>
  </section>


)


Wrapper.defaultProps = {
  title : "no title set!"
}



export default withStyles(styles)(Wrapper);
