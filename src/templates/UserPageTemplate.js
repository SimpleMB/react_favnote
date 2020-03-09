import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/organisms/Sidebar/Sidebar';
import Alert from '../components/molecules/Alert/Alert';

const UserPageTemplate = ({ children }) => {
  return (
    <>
      <Alert />
      <Sidebar />
      {children}
    </>
  );
};

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.array,
  ]).isRequired,
};

// TODO: Connect to auth and work with alerts for database connection

export default UserPageTemplate;
