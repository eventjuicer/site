

import {
	DRAWER_SHOW,
	DRAWER_HIDE
} from '../../components/redux/types'


const reducer = (state = {chatlion : {}}, action) => {


	switch (action.type) {
		case DRAWER_SHOW:
			return true
		case DRAWER_HIDE:
			return false
		default:
			return state
	}
}


export default reducer;
