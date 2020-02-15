import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';
import UserPageTemplate from './UserPageTemplate';

const StyledWrapper = styled.div`
  position: relative;
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

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 50px;
  right: 30px;
  border-radius: 50%;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  /* transform: ${({ active }) => active && 'rotate(45deg)'}; */
  z-index: 10000;
`;

const GridTemplate = ({ children, global: { pageType } }) => {
  const [state, setState] = useState({ newItemPanelActive: false });
  const { newItemPanelActive } = state;

  const handleNewItemPanel = () => {
    setState({ newItemPanelActive: !newItemPanelActive });
  };
  const elementsCount = children && children.length;
  return (
    <UserPageTemplate>
      <StyledWrapper>
        <StyledPageHeader>
          <Input search placeholder="search" />
          <StyledHeading big>{pageType}</StyledHeading>
          <StyledParagraph> {elementsCount} elements</StyledParagraph>
        </StyledPageHeader>
        <StyledGridWrapper>{children}</StyledGridWrapper>
        <StyledButtonIcon
          activeColor={pageType}
          icon={plusIcon}
          onClick={handleNewItemPanel}
          active={newItemPanelActive}
        />
        <NewItemBar isVisible={newItemPanelActive} toggleActive={handleNewItemPanel} />
      </StyledWrapper>
    </UserPageTemplate>
  );
};

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
  global: PropTypes.objectOf(PropTypes.string).isRequired,
};

GridTemplate.defaultProps = {
  children: [],
};

const mapStateToProps = state => ({
  global: state.global,
});

export default connect(mapStateToProps)(GridTemplate);
