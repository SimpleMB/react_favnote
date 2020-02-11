import { GET_NOTES, ADD_NOTE, DELETE_NOTE, SAVE_NOTE } from './types';

export const getNotes = () => async dispatch => {
  dispatch({
    type: GET_NOTES,
    payload: null,
  });
};

export const addNote = ({ id, title, content, created }) => {
  const note = { id, title, content, created };
  return {
    type: ADD_NOTE,
    payload: note,
  };
};

export const deleteNote = id => ({
  type: DELETE_NOTE,
  payload: id,
});

export const saveNote = note => async dispatch => {
  dispatch({
    type: SAVE_NOTE,
    payload: note,
  });
};
