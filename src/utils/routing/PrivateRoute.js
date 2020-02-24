import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { routes } from 'routes';

const PrivateRoute = ({ component: Component, exact, path, auth: { user } }) => {
  return !user ? (
    <Redirect to={routes.login} />
  ) : (
    <Route
      exact={exact}
      path={path}
      render={props => {
        // due to fkn false-positive eslint error i need to extract match prop before
        // using it in Component. It just doesn't see it :(
        const { match } = props;
        return <Component match={match} />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object]),
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  auth: PropTypes.objectOf(PropTypes.object).isRequired,
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

PrivateRoute.defaultProps = {
  component: null,
  exact: false,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
