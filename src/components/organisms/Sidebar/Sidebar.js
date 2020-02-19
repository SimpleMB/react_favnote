import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { switchTheme as switchThemeAction } from 'actions/themeActions';
import { logout as logoutAction } from 'actions/authActions';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Button from 'components/atoms/Button/Button';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoIcon from 'assets/icons/logo.svg';
import { routes } from 'routes';

const StyledWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  min-height: 400px;
  width: 10rem;
  background-color: ${({ theme }) => theme.notes};
  padding: 35px 0;
  z-index: 999;

  ${({ activeColor }) =>
    activeColor &&
    css`
      background-color: ${({ theme }) => theme[activeColor]};
    `}
`;

const NavWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background: url(${logoIcon}) no-repeat center/80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const StyledThemeButton = styled(Button)`
  max-width: 9rem;
`;

const Sidebar = ({ global: { pageType }, switchTheme, logout }) => {
  return (
    <StyledWrapper activeColor={pageType}>
      <StyledLogoLink exact to="/" />
      <NavWrapper>
        <li>
          <ButtonIcon as={NavLink} to="/notes" icon={penIcon} />
        </li>
        <li>
          <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} />
        </li>
        <li>
          <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} />
        </li>
      </NavWrapper>

      <StyledLogoutButton as={NavLink} exact to={routes.login} icon={logoutIcon} onClick={logout} />
      <StyledThemeButton secondary onClick={switchTheme}>
        Theme
      </StyledThemeButton>
    </StyledWrapper>
  );
};

Sidebar.propTypes = {
  global: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  switchTheme: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  global: state.global,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  switchTheme: () => dispatch(switchThemeAction()),
  logout: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
