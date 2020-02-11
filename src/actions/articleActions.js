import { GET_ARTICLES, ADD_ARTICLE, DELETE_ARTICLE, SAVE_ARTICLE } from './types';

export const getArticles = () => async dispatch => {
  dispatch({
    type: GET_ARTICLES,
    payload: null,
  });
};

export const addArticle = ({ id, title, articleUrl, content, created }) => {
  const urlCorrect = /^(http|https)/.test(articleUrl);
  const article = { id, title, articleUrl, content, created };
  if (!urlCorrect) {
    const correctUrl = `https://${articleUrl}`;
    article.articleUrl = correctUrl;
  }
  return {
    type: ADD_ARTICLE,
    payload: article,
  };
};

export const deleteArticle = id => ({
  type: DELETE_ARTICLE,
  payload: id,
});

export const saveArticle = article => async dispatch => {
  dispatch({
    type: SAVE_ARTICLE,
    payload: article,
  });
};
