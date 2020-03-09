import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';
import { getArticles as getArticlesAction } from 'actions/articleActions';

const Articles = ({ article: { articles }, auth: { user }, getArticles }) => {
  // check if articles obj in state is empty and user is logged in / Then fetch articles from server
  useEffect(() => {
    if (!articles[0] && user) getArticles();
    // eslint-disable-next-line
  }, [user]);

  const artsList =
    articles &&
    articles.map(({ id, title, content, created, articleUrl }) => (
      <Card
        key={id}
        id={id}
        cardType="articles"
        title={title}
        content={content}
        created={created}
        articleUrl={articleUrl}
      />
    ));
  return <GridTemplate>{artsList}</GridTemplate>;
};

const mapStateToProps = state => ({
  article: state.article,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  getArticles: () => dispatch(getArticlesAction()),
});

Articles.propTypes = {
  article: PropTypes.oneOfType([PropTypes.object]).isRequired,
  auth: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  getArticles: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
