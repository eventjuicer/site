import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import _classNames from 'classnames'
import compose from 'recompose/compose'
import PropTypes from 'prop-types';
import {translate} from '../i18n'

const styles = {


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

  }

};

const templates = {

  H2C : {
    variant : "headline", component : "h2", classNames : ["h2", "centered"]
  },
  LIH3 : {
      variant : "subheading", component : "h3", classNames : ["bigListItem"]
  }

}



const MyTypography = (props) => {

  const _props = props.template  ? {...props, ...templates[props.template]} : props;

  const classNames = _classNames(_props.classNames.map(className => className in props.classes ? props.classes[className] : false))

  return (
    <Typography variant={_props.variant} component={_props.component} className={classNames}>{props.label ? props.translate(props.label) : props.children}</Typography>
  )
}


MyTypography.defaultProps = {
  label : null,
  classNames : [],
  className : null,
  variant : 'headline',
  component : 'h2'
}


const enhance = compose(
  withStyles(styles),
  translate
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
