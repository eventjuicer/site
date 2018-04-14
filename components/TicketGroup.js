
import React from 'react';
import { withStyles } from 'material-ui/styles';
// import { connect } from 'react-redux';
import compose from 'recompose/compose'
import sortBy from 'lodash/sortBy';

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import _get from 'lodash/get'

import Ticket from './Ticket'
import BoothInfoHeader from './BoothInfoHeader'

const styles = (theme) => ({

  root : {

  },
  table: {
//    minWidth: 700,
    marginBottom : 30,
  },


});



const CustomTableCell = withStyles(theme => ({
  // typeHead: {
  //   backgroundColor: theme.palette.common.black,
  //   color: theme.palette.common.white,
  // },
  typeBody: {
    fontSize: 16,
  },
}))(TableCell);




class TicketGroup extends React.PureComponent {

  checkIfHasBookableTickets()
  {
      const { group  } = this.props;
      return (group.tickets || []).filter(ticket => ticket && ticket.bookable).length;
  }


  render()
  {

    const { group, formdata, label, noBookableTickets, classes  } = this.props;
    const sorted = sortBy(group.tickets, ["start"]);

    return (

      <div>

      {!this.checkIfHasBookableTickets() ? noBookableTickets : null}

      <BoothInfoHeader formdata={formdata} group={group} />

      <Table className={classes.table}>
          <TableHead>
                <TableRow>
                  <CustomTableCell>start sprzedaży</CustomTableCell>
                  <CustomTableCell>nazwa puli</CustomTableCell>
                  <CustomTableCell numeric>cena netto</CustomTableCell>
                </TableRow>
          </TableHead>
              <TableBody>

              {sorted && sorted.map(ticket => <Ticket key={ticket.id} ticket={ticket} formdata={formdata} />)}

              </TableBody>
            </Table>


     </div>

    )

  }


}


TicketGroup.defaultProps = {
  label : "Bilety",
  noBookableTickets : null
}

export default withStyles(styles)(TicketGroup);
