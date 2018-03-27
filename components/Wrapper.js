

import { withStyles } from 'material-ui/styles';
import MyTypography from './MyTypography';
import classNames  from 'classnames';


const styles = () => ({


    title : {
      fontSize : '3rem',
      textTransform: 'uppercase',
      fontWeight : 500,
      marginBottom: '2rem',
      textAlign: 'center'
    },

    root : {

        display: 'block',
        minHeight: 350,
        backgroundColor: '#fff',
        
        paddingBottom: '3rem',
        paddingTop: '3rem',

        position: 'relative',


    },

    rootDense : {

      paddingBottom: '1rem',
      paddingTop: '1rem',
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
      marginTop : '2rem',
      zIndex: 111,
    },

    centered : {
      display : 'flex',
      // alignItems : 'flex-end',
      justifyContent : 'flex-end',
      marginTop : '2rem'
    }

})




const Wrapper = ({

  translate,
  classes,

  label,
  title,
  typography,

  secondaryLabel,
  secondaryTitle,
  secondaryTypography,

  children,

  color,
  links,
  dense}) => (

  <section className={classNames(classes.root, {
    [classes.rootDense] : dense
  })} style={{backgroundColor : color}}>
    {/* <div className={props.classes.overlay}>

    </div> */}

    <div className={classes.container}>


      {label && <MyTypography label={label} template={typography} /> }
      {title && <MyTypography template={typography}>{title}</MyTypography> }

      {secondaryLabel && <MyTypography label={secondaryLabel} template={secondaryTypography} highlight={true} /> }
      {secondaryTitle && <MyTypography template={secondaryTypography} highlight={true}>{secondaryTitle}</MyTypography> }


      {children}

      {links.length ? <div className={classes.centered}>
        {links.map(link => link)}
      </div> : null}

    </div>




  </section>


)


Wrapper.defaultProps = {
  label : null,
  title : null,
  secondaryLabel : null,
  secondaryTitle : null,
  secondaryTypography : 'SUBH2CH',
  color : '#ffffff',
  links : [],
  dense : false,
  typography : "H2C"
}


export default withStyles(styles)(Wrapper);
