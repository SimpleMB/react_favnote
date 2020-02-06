import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import UserPageTemplate from './UserPageTemplate';

const StyledWrapper = styled.div`
  padding: 0 150px 30px 14rem;
  background-color: ${({ theme }) => theme.mainBackground};
`;

const StyledPageHeader = styled.div`
  padding: 40px 0 0;
`;

const StyledHeading = styled(Heading)`
  margin: 20px 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 30px;
`;

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 85px;
`;

const GridTemplate = ({ children, global: { pageType } }) => {
  const elementsCount = children.length;
  return (
    <UserPageTemplate>
      <StyledWrapper>
        <StyledPageHeader>
          <Input search placeholder="search" />
          <StyledHeading big>{pageType}</StyledHeading>
          <StyledParagraph> {elementsCount} elements</StyledParagraph>
        </StyledPageHeader>
        <StyledGridWrapper>{children}</StyledGridWrapper>
      </StyledWrapper>
    </UserPageTemplate>
  );
};

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  global: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  global: state.global,
});

export default connect(mapStateToProps)(GridTemplate);
