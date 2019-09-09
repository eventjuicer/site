import _pick from 'lodash/pick';

import {
  ROLE_SELECT,
  ROLE_RESET,
  CART_ITEM_ADD,
  CART_ITEM_REMOVE,
  CART_RESET,
  LINKEDIN_TOKEN_SUCCESS
} from '../../components/redux';

import { CHANGE_LOCALE } from '../../i18n';

const defaultState = {
  role: '',
  cart: {},
  locale: 'pl',
  locale_msgs: {},
  width: 'md',
  linkedin : null,
  filterParams: {
    presenters: {}
  }
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SCREEN_SIZE_CHANGED':
      return { ...state, width: action.width };
      break;

    case CHANGE_LOCALE:
      return { ...state, locale: action.locale };
      break;

    case ROLE_SELECT:
      return { ...state, role: action.role };
      break;

    case ROLE_RESET:
      return { ...state, role: '' };
      break;

    case CART_ITEM_ADD:
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.ticketId]: {
            quantity: action.quantity,
            formdata: action.formdata
          }
        }
      };
      break;

    case CART_ITEM_REMOVE:
      return {
        ...state,
        cart: _pick(
          state.cart,
          Object.keys(state.cart).filter(
            ticketId => action.ticketId != ticketId
          )
        )
      };
      break;

    case CART_RESET:
      return { ...state, cart: {} };
      break;


    case LINKEDIN_TOKEN_SUCCESS:
      return {...state, linkedin : action.token};

    default:
      return state;
  }
};

export default reducer;
