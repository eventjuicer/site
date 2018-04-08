
import { connect } from 'react-redux';
import compose from 'recompose/compose'
import withWidth from 'material-ui/utils/withWidth';


import {
  resourceFetchRequest as resourceFetchRequestAction
} from './redux/actions'


function screenSizeChanged(width) {
  return {
		type: "SCREEN_SIZE_CHANGED",
    width : width
	}
}


const ScreenSize = ({oldWidth, width, screenSizeChanged}) => {

  if(width && oldWidth !== width)
  {
    screenSizeChanged(width);
  }
  return null;
}

const enhance = compose(
  withWidth(),
  connect(state => ({oldWidth : state.app.width}), {screenSizeChanged}
  )
)

export default enhance(ScreenSize);
