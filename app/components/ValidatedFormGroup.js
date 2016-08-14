const React = require('react');
const { PropTypes } = React;
const ValidatedFormGroup = ({ meta: { touched, error }, label, input, type, disabled }) => (
  <div className={'form-group' + ((touched && error !== undefined) ? ' has-error' : '')}>
    <label htmlFor="id" className="control-label">{label}</label>
    <input {...input} placeholder={label} type={type} disabled={disabled} className="form-control" />
  </div>
);
ValidatedFormGroup.propTypes = {
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired
};
module.exports = ValidatedFormGroup
