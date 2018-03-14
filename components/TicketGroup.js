

import { withStyles } from 'material-ui/styles';
// import { connect } from 'react-redux';
import compose from 'recompose/compose'
import sortBy from 'lodash/sortBy';


import {
  FormLabel,
  FormControl,
} from 'material-ui/Form';


import Ticket from './Ticket'

const styles = (theme) => ({

  root : {

  },

});



class TicketGroup extends React.PureComponent {

  checkIfHasBookableTickets()
  {
      const { group  } = this.props;
      return (group.tickets || []).filter(ticket => ticket && ticket.bookable).length;
  }


  render()
  {

    const { group, formdata, label, noBookableTickets  } = this.props;
    const sorted = sortBy(group.tickets, ["start"]);

    return (

      <div>
      {!this.checkIfHasBookableTickets() ? noBookableTickets : null}

        <FormControl component="fieldset" fullWidth margin="normal">

      <FormLabel component="legend">{label}</FormLabel>

      {sorted && sorted.map(ticket => <Ticket key={ticket.id} ticket={ticket} formdata={formdata} />)}

     </FormControl>

     </div>

    )

  }


}


TicketGroup.defaultProps = {
  label : "Bilety",
  noBookableTickets : null
}

export default withStyles(styles)(TicketGroup);
