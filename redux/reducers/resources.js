import { RESOURCE_FETCH_SUCCESS } from '../../components/redux/types';

export const initialState = {
  formdata: [],
  ticketgroups: [],
  tickets: [],
  photos: [],
  bookingmap: []
};

const reducer = (state = initialState, action) => {
  const { type, resource, data } = action;

  switch (type) {
    case RESOURCE_FETCH_SUCCESS:
      return { ...state, [resource]: data };
      break;
    default:
      return state;
  }
};

export default reducer;
