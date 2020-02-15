import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';
import { getNotes } from 'actions/noteActions';
import { auth } from '../firebase';

const Notes = ({ note: { notes }, getNotesAction }) => {
  useEffect(() => {
    auth.onAuthStateChanged(user => user && getNotesAction());
    // eslint-disable-next-line
  }, []);

  const notesList =
    notes &&
    notes.map(({ id, title, content, created }) => (
      <Card key={id} id={id} cardType="notes" title={title} content={content} created={created} />
    ));
  return <GridTemplate>{notesList}</GridTemplate>;
};

const mapStateToProps = state => ({
  note: state.note,
});

const mapDispatchToProps = dispatch => ({
  getNotesAction: () => dispatch(getNotes()),
});

Notes.propTypes = {
  note: PropTypes.oneOfType([PropTypes.object]).isRequired,
  getNotesAction: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Notes);
