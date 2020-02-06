import { GET_ARTICLES, ADD_ARTICLE, DELETE_ARTICLE, SAVE_ARTICLE } from './types';

export const getArticles = () => async dispatch => {
  dispatch({
    type: GET_ARTICLES,
    payload: null,
  });
};

export const addArticle = article => async dispatch => {
  dispatch({
    type: ADD_ARTICLE,
    payload: article,
  });
};

export const deleteArticle = id => async dispatch => {
  dispatch({
    type: DELETE_ARTICLE,
    payload: id,
  });
};

export const saveArticle = article => async dispatch => {
  dispatch({
    type: SAVE_ARTICLE,
    payload: article,
  });
};
