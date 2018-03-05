
import Card from './MyCardSlim'

import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';


const styles = theme => ({
  icon: {
    height: 38,
    width: 38,
  },
});


const Buttons = withStyles(styles)((props) => <IconButton aria-label="Contact">
  <PlayArrowIcon className={props.classes.icon} />
</IconButton>)

export default () => (<div><Card title="kto pomoze?" text="ja pomoge" link={<Buttons />}/><p>Support People</p></div>)
