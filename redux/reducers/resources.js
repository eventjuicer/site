import { RESOURCE_FETCH_SUCCESS, VOTE_STATUS_SUCCESS } from '../../components/redux/types';

export const initialState = {
  formdata: [],
  ticketgroups: [],
  tickets: [],
  photos: [],
  bookingmap: [],
  exhibitors : [],
  callforpapers : [],
  texts : {}
};

import { CHANGE_LOCALE_MSGS } from '../../i18n';


const reducer = (state = initialState, action) => {
  const { type, resource, data } = action;

  switch (type) {

    case VOTE_STATUS_SUCCESS:
      return { ...state, "votes" : data};
    break;
    
    case RESOURCE_FETCH_SUCCESS:
      return { ...state, [resource]: data };
    break;

    case CHANGE_LOCALE_MSGS:
        return { ...state, texts: action.messages };
    break;

    default:
      return state;
  }
};

export default reducer;
