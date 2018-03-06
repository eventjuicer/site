


import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose'

import find from 'lodash/find';


//import {translate} from '../i18n'


import {cartItemAdd, boothSelect, resourceFetchRequest} from './redux/actions'


const styles = (theme) => ({

  root : {

  },

});



class TicketGroup extends React.Component {

  componentDidMount()
  {
    this.props.resourceFetchRequest("tickets");
  }

  addToCart = () =>
  {
    const { cartItemAdd, boothSelect, boothId} = this.props;
    boothSelect(boothId);
  }

  render()
  {
    return (<div><span onClick={this.addToCart}>DODAJ</span> grupa ticketow</div>)
  }

}

const enhance = compose(
//  translate,
  withStyles(styles),
  connect(state => ({
    boothsSelected : state.boothsSelected,
    formdata : state.resources.formdata
  }), {cartItemAdd, boothSelect, resourceFetchRequest}
  )
)

export default enhance(TicketGroup);
