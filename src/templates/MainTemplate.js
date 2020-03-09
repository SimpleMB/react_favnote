import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { connect } from 'react-redux';
import { switchPageType as switchPageTypeAction } from 'actions/globalActions';
import { checkUser as checkUserAction } from 'actions/authActions';
import { auth } from '../firebase';

const MainTemplate = ({ children, theme: { theme }, switchPageType, checkUser, ...props }) => {
  const {
    location: { pathname },
  } = props;

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      checkUser(user);
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const pageTypes = ['notes', 'twitters', 'articles', 'login', 'register'];
    const [currentPage] = pageTypes.filter(page => pathname.includes(page));
    if (currentPage) switchPageType(currentPage);
    // eslint-disable-next-line
  }, [pathname]);

  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  theme: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.bool])).isRequired,
  switchPageType: PropTypes.func.isRequired,
  checkUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  theme: state.theme,
});

const mapDispatchToProps = dispatch => ({
  switchPageType: pageType => dispatch(switchPageTypeAction(pageType)),
  checkUser: user => dispatch(checkUserAction(user)),
});

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(MainTemplate);
