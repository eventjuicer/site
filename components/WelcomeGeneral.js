

import { connect } from 'react-redux';
import compose from 'recompose/compose'


import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Slide from 'material-ui/transitions/Slide';
import { MenuItem, MenuList } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';

import {roleSelect} from './redux/actions'

const styles = theme => ({


  list: {
     width: '50%',
  // maxWidth: 360,
     backgroundColor: theme.palette.background.paper,
     opacity: 0.9
   },

  h1 : {
    fontSize : '6vh',
    textTransform: 'uppercase',
    fontWeight : 900,
    color: 'white'
  },

  texts : {

    marginTop: '10vh'

  },

  headingSmaller : {
    // fontSize : '5vh',
    // textTransform: 'uppercase',
    // fontWeight : 900,
    // color: 'white'
  },

  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},

  icon : {}

});




const Option = compose(
  connect(null, {roleSelect}),
  withStyles(styles)
)(
  ({role, roleSelect, classes, text}) => (

  <MenuItem onClick={() => roleSelect(role) } className={classes.itemClass}>

    <ListItemIcon className={classes.icon}>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText classes={{ primary: classes.primary }} inset primary={text} />

  </MenuItem>

))



class Welcome extends React.Component {


  state = {

    second : false,
    menu : false

  }


  runNext()
  {

  this.setState({second : true})  
  }

  showOptions(){

    this.setState({menu : true})
  }



  render(){

    const { classes, roleSelect, items } = this.props;
    const { second, menu } = this.state;

    return (  <div>


      <div className={classes.texts}>

      <Slide in={true} style={{ transitionDelay:  1000 }} onEntered={() => this.runNext() }>
           <Typography variant="headline" component="h1" className={classes.h1}>
             co tam, jak tam?
           </Typography>
      </Slide>

      <Slide in={second} style={{ transitionDelay:  1000 }} onEntered={() => this.showOptions() }>

      <Typography variant="headline" component="h1" className={classes.h1}>
        będziesz na Targach?
      </Typography>

      </Slide>


      </div>

      {menu &&

      <Slide in={true} style={{ transitionDelay:  1000 }}>
          <MenuList className={classes.list}>
        {items && items.map((item, idx) => <Option key={idx} role={item.role} text={item.text} /> )}
      </MenuList>
      </Slide>
   }


      </div>)

  }
}





export default withStyles(styles)(Welcome)
