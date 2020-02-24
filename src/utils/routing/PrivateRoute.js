import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { routes } from 'routes';

const PrivateRoute = ({ component: Component, render, exact, path, auth: { user } }) => {
  if (!user) return <Redirect to={routes.login} />;
  if (render) return <Route exact={exact} path={path} render={render} />;
  return <Route exact={exact} path={path} component={Component} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object]),
  render: PropTypes.func,
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  auth: PropTypes.objectOf(PropTypes.object).isRequired,
};

PrivateRoute.defaultProps = {
  component: null,
  render: null,
  exact: false,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
