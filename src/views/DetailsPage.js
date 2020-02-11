import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';

const DetailsPage = ({ match, note: { notes }, article: { articles }, twitter: { twitters } }) => {
  const pathArray = match.url.split('/');
  const pageType = pathArray[1];
  const itemId = pathArray[2];

  console.log(itemId);

  const item = (function() {
    switch (pageType) {
      case 'notes':
        return notes.filter(singleItem => singleItem.id === itemId);
      case 'twitters':
        return twitters.filter(singleItem => singleItem.id === itemId);
      case 'articles':
        return articles.filter(singleItem => singleItem.id === itemId);
      default:
        return 0;
    }
  })();
  if (item[0] === undefined) return <Redirect push to={routes[pageType]} />;

  const { id, title, content, articleUrl, twitterName, created } = item[0];

  return (
    <DetailsTemplate
      id={id}
      title={title}
      content={content}
      articleUrl={articleUrl}
      twitterName={twitterName}
      created={created}
    />
  );
};

DetailsPage.propTypes = {
  match: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object]),
  ).isRequired,
  note: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.string])).isRequired,
  twitter: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.string])).isRequired,
  article: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.string])).isRequired,
};

const mapStateToProps = state => ({
  note: state.note,
  twitter: state.twitter,
  article: state.article,
});

export default connect(mapStateToProps, null)(DetailsPage);
