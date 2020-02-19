import { auth } from '../firebase';
import { LOGIN, LOGOUT, REGISTER } from './types';

export const register = (email, password) => dispatch => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      if (res.user) {
        dispatch({
          type: REGISTER,
          payload: res.user,
        });
      }
    })
    .catch(err => console.log(err));
};

export const logout = () => dispatch => {
  auth.signOut();
  dispatch({
    type: LOGOUT,
  });
};

export const login = (email, password) => dispatch => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      const { uid, email: userEmail } = res.user;
      console.log(res);
      if (res.user) {
        dispatch({
          type: LOGIN,
          payload: { uid, userEmail },
        });
      }
    })
    .catch(err => console.log(err));
};
