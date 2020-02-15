import React from 'react';
import PropTypes from 'prop-types';

const AuthTemplate = ({ children }) => {
  return <div>{children}</div>;
};

AuthTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AuthTemplate;
