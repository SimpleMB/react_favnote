import { GET_TWITTERS, ADD_TWITTER } from './types';

export const getTwitters = () => async dispatch => {
  dispatch({
    type: GET_TWITTERS,
    payload: null,
  });
};

export const addTwitter = ({ id, twitterName, title, content, created }) => {
  const twit = { id, twitterName, title, content, created };
  return {
    type: ADD_TWITTER,
    payload: twit,
  };
};
