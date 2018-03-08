

import {
	DIALOG_SHOW,
	DIALOG_HIDE
} from '../../components/redux/types'



const reducer = (state = {}, action) => {


	switch (action.type) {
		case DIALOG_SHOW:
			return action.payload
		case DIALOG_HIDE:
			return {}
		default:
			return state
	}
}


export default reducer;
