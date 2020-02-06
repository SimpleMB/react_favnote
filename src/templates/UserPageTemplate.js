import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/organisms/Sidebar/Sidebar';

const UserPageTemplate = ({ children }) => {
  return (
    <>
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

export default UserPageTemplate;
