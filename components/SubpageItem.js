
import Link from 'next/link'
import { withStyles } from 'material-ui/styles';
import {slug} from '../helpers'
import classNames from 'classnames'
import {BigListItem} from './MyTypography';
import PropTypes from 'prop-types';

const styles = {

  textLink : {
    textDecoration : 'none',
    color: 'rgba(0, 0, 0, 0.87)'
  },

  tile : {
    height: 200,
    backgroundSize: '75%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  media: {
    textIndent : -5000,
    display: 'block',
    height : '100%'
  },

};


const SubPageLink = ({name, subpage, id, className}) =>
{
  if(!name) return null;

  return (
    <Link as={`/${ slug(name) },${ subpage.charAt(0) },${ id }`} href={`/${ subpage }?id=${ id }`}>
      <a className={className}>{name}</a>
    </Link>
  )
}

SubPageLink.propTypes = {
    id : PropTypes.number.isRequired,
    subpage : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    className : PropTypes.string
}



const SubPageItem = (props) => {

  const {classes, src, name, id, subpage} = props;

  if(!src)
  {
    return (
      <BigListItem>
        <SubPageLink {...props} className={classes.textLink} />
      </BigListItem>
    )
  }

  return (

    <h3 className={classes.tile} style={ {backgroundImage: `url(${src})`} }>
        <SubPageLink {...props} className={classes.media} />
    </h3>

  )
}

export default withStyles(styles)(SubPageItem)
