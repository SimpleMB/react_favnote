import { combineReducers } from 'redux';

import authReducer from 'reducers/authReducer';
import noteReducer from 'reducers/noteReducer';
import twitterReducer from 'reducers/twitterReducer';
import articleReducer from 'reducers/articleReducer';
import themeReducer from 'reducers/themeReducer';
import globalReducer from 'reducers/globalReducer';

// TODO: Create alert state for errors
export default combineReducers({
  auth: authReducer,
  note: noteReducer,
  twitter: twitterReducer,
  article: articleReducer,
  theme: themeReducer,
  global: globalReducer,
});
