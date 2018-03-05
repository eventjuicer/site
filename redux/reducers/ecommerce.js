

import {
	SNACKBAR_SHOW,
	SNACKBAR_HIDE
} from '../types'





export const exampleInitialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null
}



const reducer = (state = exampleInitialState, action) => {
	const { type, text, todo } = action

	switch (type) {
		case SNACKBAR_SHOW:
			return [
				...state,
				{
					id: Math.random()
						.toString(36)
						.substring(2),
					text
				}
			]
		case SNACKBAR_HIDE:
			return state.filter(i => i !== todo)
		default:
			return state
	}
}


export default reducer;
