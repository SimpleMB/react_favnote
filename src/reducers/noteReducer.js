import { GET_NOTES, ADD_NOTE, DELETE_NOTE, SAVE_NOTE } from '../actions/types';

const initialState = {
  notes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload),
      };
    case SAVE_NOTE:
      return {
        ...state,
        notes: state.notes.map(note => (note.id === action.payload.id ? action.payload : note)),
      };
    default:
      return state;
  }
};
