import React from 'react'
import {translate} from '../i18n'
import { withStyles } from '@material-ui/core/styles';

import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'


const CustomTableCell = withStyles(theme => ({
  // typeHead: {
  //   backgroundColor: theme.palette.common.black,
  //   color: theme.palette.common.white,
  // },
  numeric: {
    fontSize: 16
  }
}))(TableCell);


const TicketGroupHeader = ({translate}) => (

  <TableHead>
    <TableRow>
      <CustomTableCell>{translate("event.sales.pool.start")}</CustomTableCell>
      <CustomTableCell>{translate("event.sales.pool.name")}</CustomTableCell>
      <CustomTableCell numeric>{translate("event.sales.pool.price")}</CustomTableCell>
    </TableRow>
  </TableHead>

)


export default translate(TicketGroupHeader)
