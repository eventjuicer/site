import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import _get from 'lodash/get';
import sortBy from 'lodash/sortBy'



import TicketGroupHeader from './TicketGroupHeader'
import Ticket from './Ticket';
import BoothInfoHeader from './BoothInfoHeader';



const styles = {
  root: {},
  table: {
    //    minWidth: 700,
    marginBottom: 30
  }
}



class TicketGroup extends React.PureComponent {

  checkIfHasBookableTickets() {
    const { group } = this.props;
    return (group.tickets || []).filter(ticket => ticket && ticket.bookable)
      .length;
  }

  render() {

    const { group, formdata, label, noBookableTickets, classes } = this.props;

    if(!this.checkIfHasBookableTickets()){
  //    return noBookableTickets;
    }

    const sorted = sortBy(group.tickets, ['start']);


    return (

      <div>

        <BoothInfoHeader formdata={formdata} group={group} />
        <Table className={classes.table}>
          <TicketGroupHeader />
          <TableBody>
            {sorted &&
              sorted.map(ticket => (
                <Ticket key={ticket.id} ticket={ticket} formdata={formdata} />
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

TicketGroup.defaultProps = {
  data : [],
  label: 'Bilety',
  noBookableTickets: null
};

export default withStyles(styles)(TicketGroup);
