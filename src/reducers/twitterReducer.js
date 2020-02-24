import { GET_TWITTERS, ADD_TWITTER, DELETE_TWITTER, SAVE_TWITTER } from 'actions/types';

const initialState = {
  twitters: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TWITTERS:
      return {
        ...state,
        twitters: action.payload,
      };
    case ADD_TWITTER:
      return {
        ...state,
        twitters: [...state.twitters, action.payload],
      };
    case DELETE_TWITTER:
      return {
        ...state,
        twitters: state.twitters.filter(twit => twit.id !== action.payload),
      };
    case SAVE_TWITTER:
      return {
        ...state,
        twitters: state.twitters.map(twit =>
          twit.id === action.payload.id ? action.payload : twit,
        ),
      };
    default:
      return state;
  }
};
