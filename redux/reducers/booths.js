

import {
	BOOTH_SELECT,
	BOOTH_UNSELECT
} from '../types'



const reducer = (state = [], action) => {

//  const arr = state

	switch (action.type) {
		case BOOTH_SELECT:
  //    arr.push(action.payload)
			return [...state, action.payload]
		case BOOTH_UNSELECT:
			return [...state.filter(item => item !== action.payload)]
		default:
			return state
	}
}


export default reducer;
