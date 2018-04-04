

import PropTypes from 'prop-types';
import Link from 'next/link'
import compose from 'recompose/compose'
import { withStyles } from 'material-ui/styles';
//import classNames from 'classnames'
//import MyTypography from './MyTypography';
import { translate } from '../i18n'
import Button from 'material-ui/Button'

const styles = {

  dumb : {},

  textLink : {
    textDecoration : 'none',
    color: 'rgba(0, 0, 0, 0.87)'
  },


};


const MyLink = ({name, label, href, prefetch, classes, translate, variant, color, icon}) =>
{


  return (
    <Link href={href} prefetch={prefetch}>
      <Button variant={variant} color={color}>{label ? translate(label) : name}</Button>
    </Link>
  )
}

MyLink.defaultProps = {
  prefetch : true,
  name : "Link",
  variant : "flat",
  color : "default",
  icon : false
}

MyLink.propTypes = {
    href : PropTypes.string.isRequired,
    name : PropTypes.string,
    label : PropTypes.string,
    variant : PropTypes.string,
    color : PropTypes.string,
    classes : PropTypes.object.isRequired
}

const enhance = compose(
  translate,
  withStyles(styles)
)

export default enhance(MyLink)
