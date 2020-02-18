import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Loader from 'assets/icons/loader.gif';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 35rem;
  min-height: 50rem;
  background-color: white;
  border-radius: 10px;
  padding: 50px 10px;
`;

const StyledFormHeading = styled.h2`
  font-size: 3rem;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;
  width: 100%;
  height: 70%;
`;

const StyledInput = styled(Input)`
  margin-bottom: 2rem;
  width: 80%;
`;

const StyledLoaderWrapper = styled(StyledForm)``;

const StyledLoader = styled.img`
  width: 30%;
`;

const StyledRedirectLink = styled.a`
  font-size: 1.5rem;
  text-transform: uppercase;
  text-decoration: underline;
  :hover {
    cursor: pointer;
  }
`;

const AuthForm = ({ global: { pageType }, onRedirect }) => {
  return (
    <StyledWrapper>
      <StyledFormHeading>{pageType === 'login' ? 'Login' : 'Register'}</StyledFormHeading>
      <Formik
        initialValues={{ email: '', password: '', password2: '' }}
        // onSubmit={(values, { setSubmitting }) => {
        //   const {} = values;
        //   setSubmitting(false)
        // }}
      >
        {({ isSubmitting }) =>
          isSubmitting ? (
            <StyledLoaderWrapper>
              <StyledLoader src={Loader} />
            </StyledLoaderWrapper>
          ) : (
            <StyledForm>
              {/* TODO */}
              <ErrorMessage name="email" component="div" />
              <Field as={StyledInput} type="email" name="email" placeholder="email" />
              <Field as={StyledInput} type="password" name="password" placeholder="password" />
              {pageType === 'register' && (
                <Field
                  as={StyledInput}
                  type="password"
                  name="password2"
                  placeholder="confirm password"
                />
              )}
              <Button>{pageType === 'login' ? 'login' : 'register'}</Button>
            </StyledForm>
          )
        }
      </Formik>
      <StyledRedirectLink onClick={onRedirect}>
        i want to {pageType === 'login' ? 'register' : 'login'}
      </StyledRedirectLink>
    </StyledWrapper>
  );
};

AuthForm.propTypes = {
  global: PropTypes.objectOf(PropTypes.string).isRequired,
  onRedirect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  global: state.global,
});

export default connect(mapStateToProps)(AuthForm);
