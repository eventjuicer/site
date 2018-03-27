

import compose from 'recompose/compose'
import PropTypes from 'prop-types';
import classNamesHelper from 'classnames'


import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';

import {translate} from '../i18n'




const styles = {

  default : {

  },

  bigListItem : {

  },

  h2 : {
    fontSize : '3rem',
    textTransform: 'uppercase',
    fontWeight : 300,
    marginBottom: '3rem',
  //  textAlign: 'center'
  },

  centered : {
    textAlign: 'center'
  },

  bold : {
    fontWeight : 500,
  },

  section : {

    marginTop : '1rem',
    marginBottom : '1rem'

  },

  mobile : {

  },

  visitor : {

    width: 'auto',
    minHeight : 10,
    margin : 10,

    "& span": {
      fontWeight : 700
    }

  },

  legend : {
    marginTop : 25,
    color : 'rgba(0, 0, 0, 0.54)'
  },

  hero : {
      fontSize : '2rem',
      color : '#ffffff',
      fontStyle: 'italic',
      fontWeight : 900,
  },

  info : {
      fontSize : '1.2rem',
      color : '#000000',
      fontWeight : 400,
      marginTop: '-1.5rem',
      marginBottom: '1.5rem',
  },

  highlighted : {

    fontStyle: 'normal',
    borderRadius: '1em 0 1em 0',
    textShadow: '1px 1px 1px #fff',
    backgroundImage : ['linear-gradient(-100deg, rgba(255,250,150,0.15), rgba(255,250,150,0.8) 100%, rgba(255,250,150,0.25))']

  }


};


/*

  VARIANTS

  'display4',
  'display3',
  'display2',
  'display1',
  'headline',
  'title',
  'subheading',
  'body2',
  'body1',
  'caption',
  'button'

*/


const templates = {

  default : {
    variant : "body1", component : "p", classNames : ["default"]
  },

  H2C : {
    variant : "headline", component : "h2", classNames : ["h2", "centered"]
  },

  H2CB : {
    variant : "headline", component : "h2", classNames : ["h2", "centered", "bold"]
  },

  LIH3 : {
      variant : "subheading", component : "h3", classNames : ["bigListItem"]
  },
  visitor : {
      variant : "body2", component : "p", classNames : ["visitor"]
  },

  legend : {
      variant : "subheading", component : "legend", classNames : ["legend"]
  },

  heroOpinion : {
      variant : "headline", component : "h2", classNames : ["hero"]
  },

  SUBH2CH : {
    variant : "body2", component : "p", classNames : ["info", "centered"]
  },


}

const hl = (highlight, text, className) => {

  if(!highlight) return text

  return <span className={className}>{text}</span>

}



const MyTypography = (props) => {

  const {variant, component, label, translate, children, classNames, classes, width, icon, iconAfter, highlight} = {...props, ...templates[props.template]};

  const cn = classNamesHelper(classNames.map(className => className in classes ? classes[className] : false), {

  })

  let _label = label;
  let _label_params = {};

  if(label && Array.isArray(label) && label.length)
  {
    _label = label[0];
    _label_params = label[1];
  }

  return (
    <Typography variant={variant} component={component} className={cn}>

      {icon}

      {hl(highlight,  label ? translate(_label, _label_params) : children, classes.highlighted ) }

      {iconAfter}

    </Typography>
  )
}


MyTypography.defaultProps = {
  template : "default",
  label : null,
  classNames : [],
  icon : null,
  iconAfter : null,
  highlight : false
}

const enhance = compose(
  withStyles(styles),
  translate,
  withWidth()
)

export default enhance(MyTypography);


//
//
// export const BigListItem = (props) => (<MyTypography variant="subheading" component="h3" color="error" className="bigListItem">{props.children}</MyTypography>)
//
// // enhance(({classes, children, translate, label}) => (<Typography gutterBottom variant="subheading" component="h3" color="error" className={classes.bigListItem}>{children}</Typography>))
//
// //export const H1C = enhance(({classes, children, translate, label}) => (<Typography variant="headline" component="h2" className={classNames(classes.h2, classes.centered)}>{children}</Typography>))
//
// export const H1 = enhance(({classes, children, translate, label}) => (<Typography variant="headline" component="h2" className={classes.h2}>{children}</Typography>))
//
// export const H2 = enhance(({classes, children, translate, label}) => (<Typography variant="headline" component="h2" className={classes.h2}>{children}</Typography>))
//
// export const H3 = enhance(({classes, children, translate, label}) => (<Typography variant="title" component="h3">{children}</Typography>))
//
// export const H4 = enhance(({classes, children, translate, label}) => (<Typography>{children}</Typography>))
//
// export const H5 = enhance(({classes, children, translate, label}) => (<Typography>{children}</Typography>))
//
// export const P = enhance(({classes, children, translate, label}) => (<Typography component="p">{children}</Typography>))
//
// export const P1 = enhance(({classes, children, translate, label}) => (<Typography component="p">{children}</Typography>))
//
// export const P2 = enhance(({classes, children, translate, label}) => (<Typography component="p">{children}</Typography>))
//
// export const Section = enhance(({classes, children, translate, label}) => (<div className={classes.section}>{children}</div>))
