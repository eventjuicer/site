import Bookingmap from '../components/Bookingmap/Bookingmap'
import OrderSteps from '../components/Bookingmap/OrderSteps'
import Legend from '../components/Bookingmap/Legend'
import {Wrapper} from '../components'


const steps = [
    "choose_booth",
    "confirm",
    "pay",
    "access"
  ]

  
const SalesMap = ({disabled, disabledTicketIds, ...rest}) => (

    <Wrapper {...rest}>
    <div>
        <div>
            <OrderSteps items={steps} active={0} />
            <Legend allowedGroupIds={ [264,265,266,267] } />
        </div>
 
        <Bookingmap disabled={disabled} disabledTicketIds={disabledTicketIds} />

    </div>
    </Wrapper>

)

SalesMap.defaultProps = {
    disabled : false,
    disabledTicketIds : []
}

export default SalesMap