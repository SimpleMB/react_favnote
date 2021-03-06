import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login as loginAction, register as registerAction } from 'actions/authActions';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import LoaderIcon from 'assets/icons/loader.gif';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 35rem;
  min-height: 37rem;
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
  text-align: center;
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

const AuthForm = ({ global: { pageType }, auth: { loading }, onRedirect, login, register }) => {
  return (
    <StyledWrapper>
      <StyledFormHeading>{pageType === 'login' ? 'Login' : 'Register'}</StyledFormHeading>
      <Formik
        initialValues={{ email: '', password: '', password2: '' }}
        validate={values => {
          const formikErrors = {};
          if (!values.email) {
            formikErrors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            formikErrors.email = 'Invalid email address';
          }
          if (pageType === 'register' && values.password !== values.password2) {
            formikErrors.password2 = "Passwords don't match";
          }
          return formikErrors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const { email, password } = values;
          if (pageType === 'login') login(email, password);
          if (pageType === 'register') register(email, password);

          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) =>
          isSubmitting || loading ? (
            <StyledLoaderWrapper>
              <StyledLoader src={LoaderIcon} />
            </StyledLoaderWrapper>
          ) : (
            <StyledForm>
              <ErrorMessage name="email" component="div" />
              <Field as={StyledInput} type="email" name="email" placeholder="email" />
              <Field as={StyledInput} type="password" name="password" placeholder="password" />
              {pageType === 'register' && (
                <>
                  <ErrorMessage name="password2" component="div" />
                  <Field
                    as={StyledInput}
                    type="password"
                    name="password2"
                    placeholder="confirm password"
                  />
                </>
              )}
              <Button type="submit">{pageType === 'login' ? 'login' : 'register'}</Button>
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
  auth: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  onRedirect: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  global: state.global,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(loginAction(email, password)),
  register: (email, password) => dispatch(registerAction(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
