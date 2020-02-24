import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';
import { getNotes as getNotesAction } from 'actions/noteActions';
import { auth } from '../firebase';

const Notes = ({ note: { notes }, auth: { user }, getNotes }) => {
  useEffect(() => {
    if (auth.currentUser) getNotes();
    // eslint-disable-next-line
  }, [user]);

  const notesList =
    notes &&
    notes.map(({ id, title, content, created }) => (
      <Card key={id} id={id} cardType="notes" title={title} content={content} created={created} />
    ));
  return <GridTemplate>{notesList}</GridTemplate>;
};

const mapStateToProps = state => ({
  note: state.note,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  getNotes: () => dispatch(getNotesAction()),
});

Notes.propTypes = {
  note: PropTypes.oneOfType([PropTypes.object]).isRequired,
  auth: PropTypes.oneOfType([PropTypes.object]).isRequired,
  getNotes: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Notes);
