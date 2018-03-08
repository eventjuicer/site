

import { withStyles } from 'material-ui/styles';
// import { connect } from 'react-redux';
import compose from 'recompose/compose'
import sortBy from 'lodash/sortBy';


import {
  FormLabel,
  FormControl,
  FormGroup,
} from 'material-ui/Form';


import Ticket from './Ticket'

const styles = (theme) => ({

  root : {

  },

});



const TicketGroup = ({ group, formdata  }) => {

  const sorted = sortBy(group.tickets, ["start"]);

  return (

    <FormControl component="fieldset" fullWidth>
    <FormLabel component="legend">Stoiska</FormLabel>
    <FormGroup>
    {sorted && sorted.map(ticket => <Ticket key={ticket.id} ticket={ticket} formdata={formdata} />)}
   </FormGroup>
   </FormControl>
  )

}


export default withStyles(styles)(TicketGroup);
