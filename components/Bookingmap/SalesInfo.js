
import { withStyles } from '@material-ui/core/styles';
import Typography from '../MyTypography';

import {Support} from '../../compositions';
import TicketGroup from './TicketGroup';
import Benefits from '../Benefits'
import BoothInfoHeader from './BoothInfoHeader';
import OrderSteps from './OrderSteps'

import {
  FaBolt as Electricity,
  FaUtensils as Catering,
  FaSquare as Space,
  FaInfoCircle as Info,
  FaIdCard as Ids,
  FaBookOpen as Catalogue,
  FaCouch as Furniture
} from 'react-icons/fa';

const styles = theme => ({

  root: {
    
    marginRight : 20,
    marginLeft: 20,
    marginTop : 20,

    display : 'flex',
    flexDirection : 'row',
    
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  boothId : {
    marginRight : 40,
    marginTop : 50,
    [theme.breakpoints.down('xs')]: {
      margin: 0
    }
  },

  mainContainer : {
    flexGrow: 5,
    marginBottom : 20
  },

  tickets : {

  },

  info : {
    marginTop: 40,
    marginBottom : 10,
  }

})

const steps = [
  "choose_booth",
  "confirm",
  "pay",
  "access"
]


const SalesInfo = ({classes, ...rest}) => (

  <div>
    
    <OrderSteps items={steps} active={1} />

  <div className={classes.root}>
  <div className={classes.boothId}>
  <BoothInfoHeader {...rest} />
 </div>

  <div className={classes.mainContainer}>

  <div className={classes.tickets}>
  
  <Typography template="salesInfo" icon={ Info } label="event.sales.pool.info" />

  <TicketGroup
      noBookableTickets={<div />}
      {...rest}
    />

  </div>

 <div className={classes.info}>

 <Typography template="salesInfo" icon={ Info } label="exhibitors.standard.info" />

<Benefits
  orientation="h"
  baseLabel="exhibitors.standard"
  labels={[
  {
    icon : Electricity, 
    primary : "electricity"
  },
  {
    icon : Catering, 
    primary : "catering"
  },
  {
    icon : Space, 
    primary : "space"
  },
  {
    icon : Ids,
    primary : "ids"
  },
  {
    icon : Catalogue,
    primary : "profile"
  },
  {
    icon : Furniture,
    primary : "furniture"
  }
]} />

</div>

      <Support title="event.sales.support" />

 </div>
</div>


  </div>
 

)



export default withStyles(styles)(SalesInfo)
