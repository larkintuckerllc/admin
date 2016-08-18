const React = require('react');
const { PropTypes } = React;
const FileFormGroup = ({ meta: { error }, input, disabled, lastPdfAddTime }) => (
  <div>
    <div className="form-group">
      <label className="btn btn-default btn-file" disabled={disabled}>
        Browse <input {...input} key={lastPdfAddTime} type="file"
        style={{display: 'none'}} />
      </label>
    </div>
    {(error === undefined) ?
      <div className="alert alert-success" role="alert">PDF selected.</div> :
      null}
    {(error === 'Not PDF.') ?
      <div className="alert alert-danger" role="alert">File must be a PDF.</div> :
      null}
  </div>
);
FileFormGroup.propTypes = {
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
  lastPdfAddTime: PropTypes.number.isRequired
};
module.exports = FileFormGroup
