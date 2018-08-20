import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import {translate} from '../../i18n'

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
      <CustomTableCell numeric>{translate("event.sales.pool.price")}</CustomTableCell>
      <CustomTableCell></CustomTableCell>
      <CustomTableCell>{translate("common.remaining")}</CustomTableCell>
    </TableRow>
  </TableHead>

)


export default translate(TicketGroupHeader)
