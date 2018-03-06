

import {
	ROLE_SELECT,
  ROLE_RESET
} from '../../components/redux/types'



const reducer = (state = {role : ""}, action) => {

	switch (action.type) {
		case ROLE_SELECT:
			return {...state, role : action.role}
		case ROLE_RESET:
			return {...state, role : ""}
		default:
			return state
	}
}


export default reducer;
