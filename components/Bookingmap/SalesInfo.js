

import {Support} from '../../compositions';
import TicketGroup from './TicketGroup';
import Benefits from '../Benefits'
import Icon from '@material-ui/icons/Done';


import {
  FaBolt as Electricity
} from 'react-icons/fa';

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
      {
        icon : Electricity, 
        primary : "electricity"
      },
      {
        icon : Icon, 
        primary : "as"
      },
      {
        icon : Icon, 
        primary : "as"
      }
    ]} />

    <Support title="event.sales.support" />
  </div>


)



export default SalesInfo
