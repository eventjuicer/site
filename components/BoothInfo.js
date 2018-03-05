


import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose'

import find from 'lodash/find';


//import {translate} from '../i18n'
import SupportPeople from './SupportPeople'

import Card from './MyCardSlim'

import {cartItemAdd, boothSelect, resourceFetchRequest} from '../redux/actions'


const styles = (theme) => ({

  root : {

  },

});



class BoothInfo extends React.Component {

  componentDidMount()
  {
    this.props.resourceFetchRequest("tickets");
  }

  addToCart = () =>
  {
    const { cartItemAdd, boothSelect, boothId} = this.props;
    boothSelect(boothId);
    cartItemAdd(123, 1);
  }

  render()
  {
    const {formdata} = this.props;


    return (<div>

      {formdata && <Card title="nazwa firmy" text="opis" link="link" />}

      <SupportPeople />

      <span onClick={this.addToCart}>DODAJ</span> grupa ticketow
    </div>)
  }

}

const enhance = compose(
//  translate,
  withStyles(styles),
  connect(state => ({
    boothsSelected : state.boothsSelected,
  }), {cartItemAdd, boothSelect, resourceFetchRequest}
  )
)

export default enhance(BoothInfo);
