
import PropTypes from 'prop-types';
import {slug} from '../helpers'
import Link from 'next/link'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles';


const styles = {

  textLink : {
    textDecoration : 'none',
    color: 'rgba(0, 0, 0, 0.87)'
  },

  tile : {
    height: 170,
    backgroundSize: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display : 'block',
    textIndent : -5000,
  //  filter : 'grayscale(100%)'
  },

}

const SubPageLink = ({name, subpage, id, classes, src}) =>
{
  if(!name) return null;

  const style = src ? {backgroundImage : `url(${src})`} : {}

  return (
    <Link as={`/${ slug(name) },${ subpage.charAt(0) },${ id }`} href={`/${ subpage }?id=${ id }`}>
      <a className={classNames({
        [classes.tile] : src,
        [classes.textLink] : !src
      })} style={style}>{name}</a>
    </Link>
  )
}

SubPageLink.defaultProps = {
    src : "",
    name : "",
    id : 0
}

SubPageLink.propTypes = {
    id : PropTypes.number.isRequired,
    subpage : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    src : PropTypes.string
}


export default withStyles(styles)(SubPageLink);
