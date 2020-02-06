import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Notes = ({ note: { notes } }) => {
  const notesList = notes.map(({ id, title, content, created }) => (
    <Card key={id} id={id} cardType="notes" title={title} content={content} created={created} />
  ));
  return <GridTemplate>{notesList}</GridTemplate>;
};

const mapStateToProps = state => ({
  note: state.note,
});

Notes.propTypes = {
  note: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
export default connect(mapStateToProps)(Notes);
