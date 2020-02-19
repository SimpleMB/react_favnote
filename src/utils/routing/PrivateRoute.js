import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { routes } from 'routes';
import { auth } from '../../firebase';

const PrivateRoute = ({ component: Component, render, exact, path }) => {
  const renderComponent = () => <Component />;
  return !auth.currentUser ? (
    <Redirect to={routes.login} />
  ) : (
    <Route exact={exact} path={path} render={render || renderComponent} />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object]),
  render: PropTypes.func,
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
};

PrivateRoute.defaultProps = {
  component: null,
  render: null,
  exact: false,
};

export default PrivateRoute;
