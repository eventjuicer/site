import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose'

import {
  FormControlLabel,
  FormHelperText,
  FormGroup,
} from 'material-ui/Form';

import Checkbox from 'material-ui/Checkbox';

import {
  cartItemAdd as cartItemAddAction,
  cartItemRemove as cartItemRemoveAction
} from './redux/actions'


class Ticket extends React.PureComponent {

  handleChange = name => (event, checked) => {

    const {ticket, cartItemAdd, cartItemRemove, formdata } = this.props;

    if(this.isSelected())
    {
      cartItemRemove(ticket.id, formdata);
    }
    else
    {
      cartItemAdd(ticket.id, 1, formdata);
    }

  };

  isSelected()
  {
    const {cart, ticket} = this.props;
    return ticket && ticket.id in cart;
  }

  getTicketName()
  {
    const {ticket} = this.props;
    //handle LOCALE!!!!!!!
    return ticket.names.pl;
  }

  render() {

    const {ticket} = this.props;

    if(!ticket)
    {
      return null;
    }

    return (

          <FormGroup>
            <FormControlLabel
            control={
              <Checkbox
                disabled={!ticket.bookable}
                color="secondary"
                checked={this.isSelected()}
                onChange={this.handleChange('_')}
                value="gilad"

              />
            }
            label={this.getTicketName()}
          />
          <FormHelperText>Be careful</FormHelperText>
          </FormGroup>
    );
  }
}

Ticket.propTypes = {
  ticket : PropTypes.object.isRequired,
};

Ticket.defaultProps = {

};

const enhance = compose(
  //translate,
  //withStyles(styles),
  connect(state => ({
    cart : state.app.cart,
  }), {
    cartItemAdd : cartItemAddAction,
    cartItemRemove : cartItemRemoveAction
  }
  )
)




export default enhance(Ticket);
