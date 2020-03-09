import { auth } from '../firebase';
import { LOGIN, LOGOUT, REGISTER, CHECK_USER, ERROR_USER } from './types';

// const setLoading =  dispatch => {
//   console.log('setloading');
//   dispatch({
//     type: LOADING_USER,
//   })
// };

export const checkUser = user => dispatch => {
  if (user) {
    const { uid, email } = user;
    dispatch({
      type: CHECK_USER,
      payload: { uid, email },
    });
  } else {
    dispatch({
      type: CHECK_USER,
      payload: null,
    });
  }
};

export const register = (email, password) => dispatch => {
  // setLoading(dispatch);
  auth.createUserWithEmailAndPassword(email, password).catch(err => {
    dispatch({
      type: ERROR_USER,
      payload: err,
    });
  });
  auth.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: REGISTER,
        payload: { uid: user.uid, email },
      });
    }
  });
};

export const logout = () => dispatch => {
  // setLoading(dispatch);
  auth.signOut().catch(err => {
    dispatch({
      type: ERROR_USER,
      payload: err,
    });
  });
  auth.onAuthStateChanged(user => {
    if (!user) {
      dispatch({
        type: LOGOUT,
      });
    }
  });
};

export const login = (email, password) => dispatch => {
  // setLoading(dispatch);
  auth.signInWithEmailAndPassword(email, password).catch(err => {
    dispatch({
      type: ERROR_USER,
      payload: err,
    });
  });
  const unsub = auth.onAuthStateChanged(user => {
    if (user) {
      const { uid, email: userEmail } = user;
      dispatch({
        type: LOGIN,
        payload: { uid, userEmail },
      });
      unsub();
    }
  });
};
