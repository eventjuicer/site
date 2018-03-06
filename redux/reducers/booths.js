

import {
	BOOTH_SELECT,
	BOOTH_UNSELECT,
	BOOTHS_RESET
} from '../../components/redux/types'



const reducer = (state = [], action) => {

//  const arr = state

	switch (action.type) {
		case BOOTH_SELECT:
			return [...state, action.payload]
		break;
		case BOOTH_UNSELECT:
			return [...state.filter(item => item !== action.payload)]
		break;
		case BOOTHS_RESET:
				return []
		break;
		default:
			return state
	}
}


export default reducer;
