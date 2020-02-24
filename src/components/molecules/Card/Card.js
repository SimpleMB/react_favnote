import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteNote as deleteNoteAction } from 'actions/noteActions';
import { deleteArticle as deleteArticleAction } from 'actions/articleActions';
import { deleteTwitter as deleteTwitterAction } from 'actions/twitterActions';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import linkIcon from 'assets/icons/link.svg';
import { Redirect } from 'react-router-dom';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  min-height: 100px;
  display: grid;
  grid-template-rows: 1fr 4fr;
`;

const InnerWrapper = styled.div`
  background-color: ${({ theme, cardType }) => (cardType ? theme[cardType] : 'white')};
  padding: 17px 30px;
  position: relative;

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 20px;
    `}
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledAvatar = styled.img`
  position: absolute;
  top: 25px;
  right: 40px;
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitters};
  border-radius: 50%;
  z-index: 1;
`;

const StyledIconLink = styled.a`
  position: absolute;
  top: 50%;
  right: 50px;
  width: 47px;
  height: 47px;
  transform: translateY(-50%);
  background: white url(${linkIcon}) no-repeat center/60%;
  border: none;
  border-radius: 50%;
`;

const Card = ({
  id,
  cardType,
  title,
  content,
  articleUrl,
  twitterName,
  created,
  deleteNote,
  deleteArticle,
  deleteTwitter,
}) => {
  const [state, setstate] = useState({ redirect: false });
  const handleCardClick = () => setstate({ redirect: true });

  const onRemove = () => {
    switch (cardType) {
      case 'notes':
        deleteNote(id);
        break;
      case 'articles':
        deleteArticle(id);
        break;
      case 'twitters':
        deleteTwitter(id);
        break;
      default:
        break;
    }
  };

  if (state.redirect) return <Redirect push to={`${cardType}/${id}`} />;
  return (
    <StyledWrapper onClick={handleCardClick}>
      <InnerWrapper cardType={cardType}>
        <StyledHeading>{title}</StyledHeading>
        <DateInfo>{created}</DateInfo>
        {cardType === 'twitters' && (
          <StyledAvatar src={`https://avatars.io/twitter/${twitterName}`} />
        )}
        {cardType === 'articles' && <StyledIconLink target="_blank" href={articleUrl} />}
      </InnerWrapper>
      <InnerWrapper flex>
        <Paragraph>{content.split(' ', 12).join(' ')}...</Paragraph>
        <Button secondary onClick={onRemove}>
          Remove
        </Button>
      </InnerWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
  created: PropTypes.string.isRequired,
  deleteNote: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  deleteTwitter: PropTypes.func.isRequired,
};

Card.defaultProps = {
  cardType: 'notes',
  articleUrl: '',
  twitterName: '',
};

const mapDispatchToProps = dispatch => ({
  deleteNote: id => dispatch(deleteNoteAction(id)),
  deleteArticle: id => dispatch(deleteArticleAction(id)),
  deleteTwitter: id => dispatch(deleteTwitterAction(id)),
});

export default connect(null, mapDispatchToProps)(Card);
