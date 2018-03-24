

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
    marginBottom: '2rem',
  //  textAlign: 'center'
  },

  centered : {
    textAlign: 'center'
  },

  section : {

    marginTop : '1rem',
    marginBottom : '1rem'

  },

  mobile : {

  },

  visitor : {

    width: 'auto',
    height : 10,
    margin : 10,
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
  LIH3 : {
      variant : "subheading", component : "h3", classNames : ["bigListItem"]
  },
  visitor : {
      variant : "body2", component : "p", classNames : ["visitor"]
  }
}



const MyTypography = (props) => {

  const {variant, component, label, translate, children, classNames, classes, width} = {...props, ...templates[props.template]};

  const cn = classNamesHelper(classNames.map(className => className in classes ? classes[className] : false), {

  })

  return (
    <Typography variant={variant} component={component} className={cn}>{label ? translate(label) : children}</Typography>
  )
}


MyTypography.defaultProps = {
  template : "default",
  label : null,
  classNames : [],
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
