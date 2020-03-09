import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: royalblue;
  text-align: center;
  padding: 10px;
  color: white;

  ${({ error }) =>
    error &&
    css`
      display: block;
    `}
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 10px;
`;

const Alert = ({ alert: { errors } }) => {
  return (
    <StyledWrapper error={errors[0]}>
      <StyledHeading>{}</StyledHeading>
      <Paragraph>{errors[0] && `${errors[0].type}: ${errors[0].msg}`}</Paragraph>
    </StyledWrapper>
  );
};

Alert.propTypes = {
  alert: PropTypes.objectOf(PropTypes.array).isRequired,
};

const mapStateToProps = state => ({
  alert: state.alert,
});

export default connect(mapStateToProps)(Alert);
