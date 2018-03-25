
import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose'
import translate from '../i18n'

import { GestureSwipeRight } from 'mdi-material-ui'


const styles = {

  icon : {
    height : 30,
    width : 30
  }

}

const WidthAwareInfo = ({classes, width, onlyFor, translate}) => {

  if(onlyFor.indexOf(width) > -1)
  {
    return <GestureSwipeRight className={classes.icon} />
  }

  return null;

}

WidthAwareInfo.defaultProps = {
  onlyFor : []
}

const enhance = compose(
    withWidth(),
    withStyles(styles),
    translate
)

export default enhance(WidthAwareInfo);
