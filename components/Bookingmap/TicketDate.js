import { translate } from '../../i18n';

const TicketDate = ({start, end, inDates, translate}) => {

    if(inDates) {
      return `${translate('event.sales.pool.end')} ${end.substring(0, 10)}`
    }

    return `${translate('event.sales.pool.start')} ${start.substring(0, 10)}` 

}

TicketDate.defaultProps = {
    inDates : false
}

export default translate(TicketDate)