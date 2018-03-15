

import compose from 'recompose/compose'
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import Animate from '../AnimateSlide'
import {isBigScreen} from '../../helpers'

const styles = theme => ({

  bigScreen : {
    fontSize : '5rem',
    textTransform: 'uppercase',
    fontWeight : 900,
    color: 'white'
  },

  smallScreen : {
    fontSize : '3rem',
    textTransform: 'uppercase',
    fontWeight : 900,
    color: 'white'
  }

});

const ResponsiveText = ({classes, visible, text, width, component, variant, onShow}) => (
  <Animate visible={visible} onShow={onShow}>
    <Typography variant={variant} component={component} className={isBigScreen(width) ? classes.bigScreen : classes.smallScreen}>
      {text}
    </Typography>
  </Animate>
)

ResponsiveText.defaultProps = {
  component : 'h1',
  variant : 'headline'
}

const enhance = compose(
  withStyles(styles),
  withWidth()
)

export default enhance(ResponsiveText)
