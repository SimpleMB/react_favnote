import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';
import { getTwitters as getTwittersAction } from 'actions/twitterActions';

const Twitters = ({ twitter: { twitters }, auth: { user }, getTwitters }) => {
  // check if twitters obj in state is empty and user is logged in / Then fetch Twitters
  useEffect(() => {
    if (!twitters[0] && user) getTwitters();
    // eslint-disable-next-line
  }, [user]);

  const twitsList =
    twitters &&
    twitters.map(({ id, title, content, created, twitterName }) => (
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
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  getTwitters: () => dispatch(getTwittersAction()),
});

Twitters.propTypes = {
  twitter: PropTypes.oneOfType([PropTypes.object]).isRequired,
  auth: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  getTwitters: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Twitters);
