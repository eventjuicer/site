

import {
	DIALOG_SHOW,
	DIALOG_HIDE
} from '../types'


export const exampleInitialState = {

}



const reducer = (state = exampleInitialState, action) => {


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
