

import {
	SNACKBAR_SHOW,
	SNACKBAR_HIDE
} from '../types'



const reducer = (state = {}, action) => {


	switch (action.type) {
		case SNACKBAR_SHOW:
			return action.payload
		case SNACKBAR_HIDE:
			return {}
		default:
			return state
	}
}


export default reducer;
