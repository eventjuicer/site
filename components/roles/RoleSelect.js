

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Slide from 'material-ui/transitions/Slide';
import { MenuList } from 'material-ui/Menu';
import RoleSelectOption from './RoleSelectOption'

const styles = theme => ({
  list: {
     width: '50%',
  // maxWidth: 360,
     backgroundColor: theme.palette.background.paper,
     opacity: 0.9
   },
  h1 : {
    fontSize : '5rem',
    textTransform: 'uppercase',
    fontWeight : 900,
    color: 'white'
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
        {items && items.map((item, idx) => <RoleSelectOption key={idx} role={item.role} text={item.text} /> )}
      </MenuList>
      </Slide>
   }


      </div>)

  }
}





export default withStyles(styles)(RoleSelect)
