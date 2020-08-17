
import {GridBenefits, Wrapper} from '../components'
import {
    FaWrench as Edu,
    FaLockOpen as Start,
    FaChalkboardTeacher as Presentation,
} from 'react-icons/fa';

//target - for whom

const _items = [

    {
        icon : Start,
        label :  'start',
    },

    {
        icon : Edu,
        label : 'mentoring'
    },

    {
        icon : Presentation,
        label : 'presentation'
    }

]


const SpeakerBenefits = ({items, ...rest}) => (
    <Wrapper {...rest}>
        <GridBenefits baseLabel="presenters.steps" items={items} />
    </Wrapper>
)

SpeakerBenefits.defaultProps = {
    items : _items
}

export default SpeakerBenefits
