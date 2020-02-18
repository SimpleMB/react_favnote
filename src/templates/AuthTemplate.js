import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import logo from 'assets/icons/logo.svg';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes';
import AuthForm from '../components/organisms/AuthForm/AuthForm';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.notes};
`;

const StyledLogo = styled.img`
  width: calc(10rem + 10vw);
`;

const StyledDescription = styled(Paragraph)`
  margin: 1.5rem 0;
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.bold};
`;

const AuthTemplate = ({ global: { pageType } }) => {
  const [state, setState] = useState({ redirect: false });
  const onRedirect = () => {
    setState({ redirect: true });
  };

  if (state.redirect)
    return <Redirect push to={pageType === 'register' ? routes.login : routes.register} />;

  return (
    <StyledWrapper>
      <StyledLogo src={logo} />
      <StyledDescription>Your new favorite online notes experience</StyledDescription>
      <AuthForm onRedirect={onRedirect} />
    </StyledWrapper>
  );
};

AuthTemplate.propTypes = {
  global: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  global: state.global,
});

export default connect(mapStateToProps)(AuthTemplate);
