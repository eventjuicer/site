
import {GridBenefits, Wrapper} from '../components'
import {
    FaGraduationCap as Edu,
    FaHandshake as Handshake,
    FaComments as Expo 
} from 'react-icons/fa';

const _items = [

    {
        icon : Handshake,
        label :  'free_expo_entry',
    },

    {   
        icon : Edu,
        label : 'free_presentations_access'
    },

    {   
        icon : Handshake,
        label : 'networking'
    },

    {   
        icon : Handshake,
        label : 'free_presentations_entry'
    }
]


const VisitorBenefits = ({items, ...rest}) => (
    <Wrapper {...rest}>
        <GridBenefits baseLabel="visitors.benefits" items={items} />
    </Wrapper>
)

VisitorBenefits.defaultProps = {
    items : _items
}

export default VisitorBenefits
