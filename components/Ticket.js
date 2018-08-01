import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { translate } from '../i18n';
import _get from 'lodash/get';

import { TableCell, TableRow } from 'material-ui/Table';

//import Checkbox from 'material-ui/Checkbox';

import {
  cartItemAdd as cartItemAddAction,
  cartItemRemove as cartItemRemoveAction
} from './redux/actions';

/*

agg :
{customers: 6, sold: 6}
bookable
:
0
end
:
"2017-11-26 23:59:59"
errors
:
["overdue"]
group_id
:
248
id
:
1258
in_dates
:
0
limit
:
7
max_quantity
:
1
names
:
{pl: "Przestrzeń 3x2 / Strefa STANDARD / Early Bird", en: "", de: ""}
price
:
{pl: 2899, en: 709, de: 0}
remaining
:
1
role
:
"exhibitor"
start
:
"2017-11-24 12:00:00"

*/

class Ticket extends React.PureComponent {
  handleChange = name => (event, checked) => {
    const { ticket, cartItemAdd, cartItemRemove, formdata } = this.props;

    if (this.isSelected()) {
      cartItemRemove(ticket.id, formdata);
    } else {
      cartItemAdd(ticket.id, 1, formdata);
    }
  };

  isSelected() {
    const { cart, ticket } = this.props;
    return ticket && ticket.id in cart;
  }

  getTicketName() {
    const { ticket, locale } = this.props;

    return _get(ticket, `names.${locale}`);
  }

  getTicketPrice() {
    const { ticket, locale, translate } = this.props;

    return `${_get(ticket, `price.${locale}`)} ${translate(
      'common.currencies.default'
    )}`;
  }

  render() {
    const { ticket, formdata } = this.props;

    if (!ticket) {
      return null;
    }

    return (
      <TableRow selected={ticket.bookable ? true : false}>
        <TableCell>{ticket.start.substring(0, 10)}</TableCell>
        <TableCell>{this.getTicketName()}</TableCell>
        <TableCell numeric>{this.getTicketPrice()}</TableCell>
      </TableRow>

      //
      // <FormGroup>
      //   <FormLabel></FormLabel>
      //   <FormControlLabel
      //   control={
      //     <Checkbox
      //       disabled={!ticket.bookable}
      //       color="secondary"
      //       checked={this.isSelected()}
      //       onChange={this.handleChange('_')}
      //       value="gilad"
      //
      //     />
      //   }
      //   label={this.getTicketName()}
      // />
      // <FormHelperText>Be careful</FormHelperText>
      // </FormGroup>
    );
  }
}

Ticket.propTypes = {
  ticket: PropTypes.object.isRequired,
  formdata: PropTypes.object.isRequired
};

Ticket.defaultProps = {};

const enhance = compose(
  translate,
  //withStyles(styles),
  connect(
    state => ({
      cart: state.app.cart
    }),
    {
      cartItemAdd: cartItemAddAction,
      cartItemRemove: cartItemRemoveAction
    }
  )
);

export default enhance(Ticket);
