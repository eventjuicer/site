
import { withStyles } from 'material-ui/styles';

import RoleSelector from './RoleSelector'
import Animate from '../AnimateSlide'
import ResponsiveText from '../ResponsiveText'


const styles = {

  textContainer : {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    width: '100%',
    height : '100%'
  },

  texts : {
    marginLeft: 20,
    marginRight : 20
  },

}


class Texts extends React.Component {


    state = {
      stage : 1,
    }

    setStage = (stage) =>
    {
      this.setState({stage : stage})
    }

    isStage(stage)
    {
      return stage === this.state.stage
    }

    roleSelect = () => {

    }

render(){

  const {classes} = this.props;
  const {stage} = this.state;

  return (

      <div className={classes.textContainer}>
      <div className={classes.texts}>
        <ResponsiveText visible={true} text="hey!" onShow={() => this.setStage(2)} />
        <ResponsiveText visible={stage > 1 } text="będziesz na Targach?" onShow={() => this.setStage(3) } />
        <Animate visible={ stage > 2 } >
        <RoleSelector roles={["exhibitor", "visitor"]} />
        </Animate>
      </div>
      </div>



  )
}

}

Texts.defaultProps = {

}


export default withStyles(styles)(Texts)
