

import {
	  RESOURCE_FETCH_SUCCESS
} from '../types'



export const initialState = {
	formdata : []
}

const reducer = (state = initialState, action) => {
	const { type, resource, data } = action

	switch (type) {
		case  RESOURCE_FETCH_SUCCESS:
			return {...state, [resource] : data}

		default:
			return state
	}
}


export default reducer;
