
import Link from 'next/link'
import { withStyles } from 'material-ui/styles';
import {slug} from '../helpers'
import classNames from 'classnames'
import {BigListItem} from './MyTypography';

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



const SubpageItem = (props) => {

  const {classes, src, name, id, namespace} = props;

  if(!src)
  {
    return (
      <BigListItem>
      <Link as={`/${ slug(name) },${ namespace },${ id }`} href={`/exhibitor?id=${ id }`}>
      <a className={classes.textLink}>{name}</a>
      </Link>
      </BigListItem>
    )
  }

  return (

    <h3 className={classes.tile} style={ {backgroundImage: `url(${src})`} }>
      <Link as={`/${ slug(name) },${ namespace },${ id }`} href={`/exhibitor?id=${ id }`}>
        <a className={classes.media}>
        {name}
        </a>
      </Link>
    </h3>

  )
}

export default withStyles(styles)(SubpageItem)
