
import _pick from 'lodash/pick'

import {
	ROLE_SELECT,
  ROLE_RESET,
	CART_ITEM_ADD,
	CART_ITEM_REMOVE,
	CART_RESET,
	CHANGE_LOCALE
} from '../../components/redux/types'


const allowedLocales = ["pl","en","de"]

const reducer = (state = {role : "", cart : {}, locale : "pl"}, action) => {

	switch (action.type)
	{

		case CHANGE_LOCALE:
			return allowedLocales.indexOf(action.locale) > -1 ? {...state, locale : action.locale} : state
		break

		case ROLE_SELECT:
			return {...state, role : action.role}
		break

		case ROLE_RESET:
			return {...state, role : ""}
		break

		case CART_ITEM_ADD:
			return {...state, cart : {...state.cart, [action.ticketId] : {quantity : action.quantity, formdata : action.formdata}}}
		break

		case CART_ITEM_REMOVE:
			return {...state, cart : _pick(state.cart, Object.keys(state.cart).filter(ticketId => action.ticketId != ticketId)) }
		break

		case CART_RESET:
			return {...state, cart : {}}
		break

		default:
			return state
	}
}


export default reducer;
