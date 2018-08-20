

import {Support} from '../../compositions';
import TicketGroup from './TicketGroup';
import Benefits from '../Benefits'
import Icon from '@material-ui/icons/Done';




const SalesInfo = ({groupId, boothId, label}) => (


  <div>

    <TicketGroup
      noBookableTickets={<div />}
      groupId={groupId}
      formdata={{ id: boothId, ti: label }}
    />
    <Benefits
      orientation="h"
      labels={[
      {icon : <Icon />, label : "as"},
        {icon : <Icon />, label : "as"},
          {icon : <Icon />, label : "as"}
    ]} />

    <Support title="event.sales.support" />
  </div>


)



export default SalesInfo
