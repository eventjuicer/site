

import { withStyles } from 'material-ui/styles';
import MyTypography from './MyTypography';



const styles = () => ({


    title : {
      fontSize : '3rem',
      textTransform: 'uppercase',
      fontWeight : 500,
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
    },

    centered : {
      display : 'flex',
      // alignItems : 'flex-end',
      justifyContent : 'flex-end',
      marginTop : '2rem'
    }

})




const Wrapper = ({translate, classes, label, title, children, color, links}) => (

  <section className={classes.section} style={{backgroundColor : color}}>
    {/* <div className={props.classes.overlay}>

    </div> */}


    <div className={classes.container}>
      {label && <MyTypography label={label} template="H2C" /> }
      {title && <MyTypography template="H2C">{title}</MyTypography> }
      {children}

      {links.length ? <div className={classes.centered}>
        {links.map(link => link)}
      </div> : null}

    </div>




  </section>


)


Wrapper.defaultProps = {
  label : null,
  color : '#ffffff',
  links : []
}


export default withStyles(styles)(Wrapper);
