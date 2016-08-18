const React = require('react');
const { Field } = require('redux-form');
const { PropTypes } = React;
const FileFormGroup = require('./FileFormGroup');
const AddPdf = ({ handleSubmit, submitting, valid, lastPdfAddTime, error }) => (
  <div className="panel panel-default">
    <div className="panel-body">
      <form onSubmit={handleSubmit}>
        <Field component={FileFormGroup}
          name="file" type="file" label="File" disabled={submitting}
          lastPdfAddTime={lastPdfAddTime} />
        {error !== undefined ?
          <div className="alert alert-danger" role="alert"><strong>Failed to add PDF.</strong></div> :
          null}
        <div className="form-group">
          <button disabled={!valid || submitting} type="submit"
            className="btn btn-default">Add PDF</button>
        </div>
      </form>
    </div>
  </div>
);
AddPdf.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
  lastPdfAddTime: PropTypes.number.isRequired,
  error: PropTypes.bool
};
module.exports = AddPdf;
