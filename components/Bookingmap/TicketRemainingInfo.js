import React from 'react';
import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

import { translate } from '../../i18n';



const TicketRemainingInfo = ({remaining, isBookable, translate}) => {

  if(!isBookable){
    return null
  }

  return   <span style={{backgroundColor : green[300], marginTop : 10, padding: 5}}>{`${translate("common.remaining")} ${remaining} ${translate("common.pcs")}`}</span>

}

TicketRemainingInfo.defaultProps = {
  isBookable : false,
  remaining : 0
}

TicketRemainingInfo.propTypes = {
  isBookable : PropTypes.bool.isRequired,
  remaining : PropTypes.number.isRequired
}

export default translate(TicketRemainingInfo)
