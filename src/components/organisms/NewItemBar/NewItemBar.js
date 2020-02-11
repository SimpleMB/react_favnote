import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import uuid from 'uuid/v1';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import TextArea from 'components/atoms/TextArea/TextArea';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import { addNote as addNoteAction } from 'actions/noteActions';
import { addTwitter as addTwitterAction } from 'actions/twitterActions';
import { addArticle as addArticleAction } from 'actions/articleActions';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '110%')});
  transition: transform 0.3s;
  padding: 50px 150px 50px 80px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
  border-left: 10px solid ${({ theme, activeColor }) => theme[activeColor]};
  z-index: 999;
`;

const StyledHeading = styled(Heading)`
  margin: 10px 0;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 20px 0;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledField = styled(Input)`
  margin-bottom: 10px;
`;

const StyledTextArea = styled(TextArea)`
  margin: 30px 0 100px;
  height: 30vh;
  border-radius: 20px;
`;

const NewItemBar = ({
  global: { pageType },
  isVisible,
  toggleActive,
  addNote,
  addTwitter,
  addArticle,
}) => {
  const handleSubmit = values => {
    const date = new Date().toLocaleDateString();
    const newItem = { ...values, id: uuid(), created: date };
    switch (pageType) {
      case 'notes':
        addNote(newItem);
        break;
      case 'twitters':
        addTwitter(newItem);
        break;
      case 'articles':
        addArticle(newItem);
        break;
      default:
        break;
    }
    toggleActive();
  };

  const newItemType = pageType.slice(0, -1);
  return (
    <StyledWrapper activeColor={pageType} isVisible={isVisible}>
      <StyledHeading big>Add new {newItemType}</StyledHeading>
      <StyledParagraph>
        {pageType === 'articles' ? 'An' : 'A'} {newItemType} requires title and description
      </StyledParagraph>

      <Formik
        initialValues={{ title: '', twitterName: '', content: '', articleUrl: '' }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleSubmit(values);
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <Field as={StyledField} type="text" name="title" placeholder="title" />
            <ErrorMessage name="title" component="div" />
            {pageType === 'twitters' && (
              <>
                <Field as={StyledField} type="text" name="twitterName" placeholder="twitter name" />
                <ErrorMessage name="twitterName" component="div" />
              </>
            )}
            {pageType === 'articles' && (
              <>
                <Field as={StyledField} type="text" name="articleUrl" placeholder="link" />
                <ErrorMessage name="articleUrl" component="div" />
              </>
            )}
            <Field as={StyledTextArea} type="text" name="content" placeholder="description" />
            <ErrorMessage name="content" component="div" />
            <Button pageType={pageType} type="submit" disabled={isSubmitting}>
              Add {newItemType}
            </Button>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

NewItemBar.propTypes = {
  global: PropTypes.objectOf(PropTypes.string).isRequired,
  isVisible: PropTypes.bool.isRequired,
  toggleActive: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
  addTwitter: PropTypes.func.isRequired,
  addArticle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  global: state.global,
});

const mapDispatchToProps = dispatch => ({
  addNote: item => dispatch(addNoteAction(item)),
  addTwitter: item => dispatch(addTwitterAction(item)),
  addArticle: item => dispatch(addArticleAction(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewItemBar);
