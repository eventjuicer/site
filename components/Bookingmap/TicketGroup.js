import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import { connect } from 'react-redux';
import compose from 'recompose/compose'



import { getTicketsSortedByStart, getTicketGroup } from '../../redux/selectors'
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


const TicketGroup = ({tickets, classes, formdata, ticketgroup}) => {

  console.log(ticketgroup)

  return (<div>

    <BoothInfoHeader formdata={formdata} />
    <Table className={classes.table}>
      <TicketGroupHeader />
      <TableBody>
        {tickets.map(ticket => (
            <Ticket key={ticket.id} ticket={ticket} formdata={formdata} />
          ))}
      </TableBody>
    </Table>
  </div>)
}





TicketGroup.defaultProps = {
  formdata : {},
  tickets : [],
  noBookableTickets: null
};


const enhance = compose(
  connect(

    (state, props) => {

      const mapStateToProps = (state, props) => {
        return {
          tickets : getTicketsSortedByStart(state, props),
          ticketgroup : getTicketGroup(state, props)
        }
      }
      return mapStateToProps}
  ),
  withStyles(styles)
)

export default enhance(TicketGroup);
