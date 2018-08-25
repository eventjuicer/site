import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { translate } from '../../i18n';



const OrderSteps = ({items, translate, baseLabel, active}) => (

    <Stepper activeStep={active} alternativeLabel>
    {items.map(label => {
    return (
        <Step key={label}>
        <StepLabel>{ translate(`${baseLabel}.${label}`) }</StepLabel>
        </Step>
    );
    })}
    </Stepper>

)

OrderSteps.defaultProps = {
    items : [],
    baseLabel : "event.sales.steps",
    active : 0
}


export default translate(OrderSteps)