import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { routes } from 'routes';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import UserPageTemplate from './UserPageTemplate';

const StyledWrapper = styled.div`
  margin: 50px 150px 50px 14rem;
`;

const StyledHeading = styled(Heading)`
  font-size: 4rem;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 40px 0 20px;
  ${({ bold }) =>
    bold &&
    css`
      margin: 0;
      font-weight: bold;
    `}
`;

const StyledLink = styled.a`
  display: block;
  font-weight: bold;
  text-decoration: none;
`;

const DetailsTemplate = ({
  global: { pageType },
  title,
  content,
  articleUrl,
  twitterName,
  created,
}) => {
  const [state, setstate] = useState({ redirect: false });
  const onClose = () => setstate({ redirect: true });

  if (state.redirect) return <Redirect push to={routes[pageType]} />;
  return (
    <UserPageTemplate>
      <StyledWrapper>
        <StyledHeading>{title}</StyledHeading>
        <StyledParagraph bold>{created}</StyledParagraph>
        <StyledParagraph>{content}</StyledParagraph>
        articleUrl: {articleUrl} <br />
        twitterName: {twitterName}
        <StyledLink href={articleUrl || twitterName}>Link</StyledLink>
        <Button pageType={pageType} onClick={onClose}>
          Close / Save
        </Button>
      </StyledWrapper>
    </UserPageTemplate>
  );
};

DetailsTemplate.propTypes = {
  global: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
  created: PropTypes.string.isRequired,
};

DetailsTemplate.defaultProps = {
  articleUrl: '',
  twitterName: '',
};

const mapStateToProps = state => ({
  global: state.global,
});

export default connect(mapStateToProps)(DetailsTemplate);
