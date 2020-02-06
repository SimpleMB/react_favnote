import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Twitters = ({ twitter: { twitters } }) => {
  const twitsList = twitters.map(({ id, title, content, created, twitterName }) => (
    <Card
      key={id}
      id={id}
      cardType="twitters"
      title={title}
      content={content}
      created={created}
      twitterName={twitterName}
    />
  ));
  return <GridTemplate>{twitsList}</GridTemplate>;
};

const mapStateToProps = state => ({
  twitter: state.twitter,
});

Twitters.propTypes = {
  twitter: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default connect(mapStateToProps)(Twitters);
