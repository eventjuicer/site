

import { withStyles } from 'material-ui/styles';
import { MenuList } from 'material-ui/Menu';
import ResponsiveText from './ResponsiveText'
import RoleSelectOption from './RoleSelectOption'
import Animate from '../AnimateSlide'

const styles = theme => ({
  list: {
     minWidth: 300,
     maxWidth: 500,
     backgroundColor: theme.palette.background.paper,
     opacity: 0.9
   },

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

  render(){

    const { classes, roleSelect, items } = this.props;
    const { second, menu } = this.state;

    return (

      <div className={classes.texts}>

        <ResponsiveText visible={true} text="hey!" onShow={this.runNext} />

        <ResponsiveText visible={second} text="będziesz na Targach?" onShow={this.showOptions} />


        <Animate visible={menu} >
            <MenuList className={classes.list}>
          {items.map((item, idx) => <RoleSelectOption key={idx} role={item.role} text={item.text} /> )}
          </MenuList>
        </Animate>
      </div>
)

  }
}

RoleSelect.defaultProps = {
  items : []
}



export default withStyles(styles)(RoleSelect)
