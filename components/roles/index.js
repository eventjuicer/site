

import { connect } from 'react-redux';


import { withStyles } from 'material-ui/styles';


import ResponsiveText from './ResponsiveText'
import RoleSelector from './RoleSelector'
import Animate from '../AnimateSlide'



const styles = theme => ({


  texts : {
    marginTop: '10vh'
  },
});

class RoleSelect extends React.Component {


  state = {

    second : false,
    menu : false

  }


  runNext = () =>
  {
    this.setState({second : true})
  }

  showOptions = () => {
    this.setState({menu : true})
  }

  roleSelect = () => {

  }

  render(){

    const { classes, roleSelect, roles } = this.props;
    const { second, menu } = this.state;

    return (

      <div className={classes.texts}>

        <ResponsiveText visible={true} text="hey!" onShow={this.runNext} />

        <ResponsiveText visible={second} text="będziesz na Targach?" onShow={this.showOptions} />

        <Animate visible={menu} >
        <RoleSelector roles={roles} />
        </Animate>

      </div>
)

  }
}

RoleSelect.defaultProps = {
  items : []
}



export default withStyles(styles)(RoleSelect)
