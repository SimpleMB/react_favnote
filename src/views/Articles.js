import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Articles = ({ article: { articles } }) => {
  const artsList = articles.map(({ id, title, content, created, articleUrl }) => (
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
});

Articles.propTypes = {
  article: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default connect(mapStateToProps)(Articles);
