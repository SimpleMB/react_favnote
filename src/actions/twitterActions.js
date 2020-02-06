import { GET_TWITTERS } from './types';

export const getTwitters = () => async dispatch => {
  dispatch({
    type: GET_TWITTERS,
    payload: null,
  });
};
