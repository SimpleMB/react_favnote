import { v1 as uuidv1 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = ({ type, msg }) => dispatch => {
  const alertId = uuidv1();
  const error = { id: alertId, type, msg };
  dispatch({
    type: SET_ALERT,
    payload: error,
  });
  const timeoutIndex = setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
      payload: alertId,
    });
    clearTimeout(timeoutIndex);
  }, 5000);
};
