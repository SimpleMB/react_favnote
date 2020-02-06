import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
// import { theme } from 'theme/mainTheme';
import { connect } from 'react-redux';
import { switchPageType as switchPageTypeAction } from 'actions/globalActions';

const MainTemplate = ({ children, theme: { theme }, switchPageType, ...props }) => {
  const [state, setState] = useState({ pageType: 'notes' });
  const {
    location: { pathname },
  } = props;

  useEffect(() => {
    const pageTypes = ['notes', 'twitters', 'articles'];
    const [currentPage] = pageTypes.filter(page => props.location.pathname.includes(page));
    setState({ pageType: currentPage });
    // eslint-disable-next-line
  }, [pathname]);

  useEffect(() => {
    switchPageType(state.pageType);
    // eslint-disable-next-line
  }, [state]);

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
};

const mapStateToProps = state => ({
  theme: state.theme,
});

const mapDispatchToProps = dispatch => ({
  switchPageType: pageType => dispatch(switchPageTypeAction(pageType)),
});

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(MainTemplate);
