import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import _get from 'lodash/get';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import green from '@material-ui/core/colors/green';

import { MyButton } from '../../components'
import TicketRemainingInfo from './TicketRemainingInfo'
import { translate } from '../../i18n';

//import Checkbox from '@material-ui/core/Checkbox';

import {
  cartItemAdd as cartItemAddAction,
  cartItemRemove as cartItemRemoveAction
} from '../redux/actions';

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


const styles = {

  selected : {
    backgroundColor : `${green[50]} !important`
  }

}

//JSON.stringify({ti : booth_id, id : ref.data("id") })

const CustomButton = () => (
  <MyButton
    target="_blank"
    label="common.buy"
    variant="contained"
    color="primary"
    type="submit"
   />
)



class Ticket extends React.PureComponent {


  constructor(props) {
    super(props);
    this.postForm = React.createRef();
  }


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
    const currency = locale === "en" ? "eur" : "pln"


    return `${_get(ticket, `price.${locale}`)} ${translate(
      `common.currencies.${currency}`
    )}`;
  }

  getPostEndpointBasedOnLocale() {
    const {locale} = this.props

    return locale == "en" ? "https://ecommercewarsaw.com/preorder" : "https://stoiska.targiehandlu.pl/preorder";
  }

  handleSubmitButton = () => {
  //  this.postForm.submit();
  }

  render() {
    const { ticket, classes, formdata } = this.props;

    if (!ticket) {
      return null;
    }

    return (

      <TableRow
        selected={ticket.bookable ? true : false}
        classes={{selected : classes.selected}}
        >
        <TableCell>{ticket.start.substring(0, 10)}</TableCell>

        <TableCell numeric>{this.getTicketPrice()}</TableCell>

        <TableCell>

          {ticket.bookable ?
          <form action={this.getPostEndpointBasedOnLocale()} method="post" target="_blank">
          <input type="hidden" name={`tickets[${ticket.id}]`} value="1" />
          <input type="hidden" name={`ticketdata[${ticket.id}]`} value={JSON.stringify(formdata)} />
          <CustomButton  />
          </form> : <span></span>}

        </TableCell>


        <TableCell>
          {<TicketRemainingInfo isBookable={ticket.bookable} remaining={ticket.remaining} />}
        </TableCell>


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
  withStyles(styles),
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
