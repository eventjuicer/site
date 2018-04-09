
import { connect } from 'react-redux';
import compose from 'recompose/compose'
import withWidth from 'material-ui/utils/withWidth';


const ScreenSize = ({oldWidth, width, screenSizeChanged, dispatch}) => {

  if(width && oldWidth !== width)
  {
    dispatch({
  		type: "SCREEN_SIZE_CHANGED",
      width : width
  	});
  }
  return null;
}

const enhance = compose(
  withWidth(),
  connect(state => ({oldWidth : state.app.width}) )
)

export default enhance(ScreenSize);
