const React = require('react');
const { PropTypes } = React;
const { Field } = require('redux-form');
const ValidatedFormGroup = require('./ValidatedFormGroup');
const AddScreen = ({ handleSubmit, submitting, valid, error }) => (
  <div className="panel panel-default">
    <div className="panel-body">
      <form onSubmit={handleSubmit}>
        <Field component={ValidatedFormGroup} name="id" type="text" label="Id" disabled={submitting} />
        <div className="form-group">
          <label htmlFor="description" className="control-label">Description</label>
          <Field component="input" name="description" type="text"
            className="form-control" placeholder="description" disabled={submitting} />
        </div>
        {error ?
          error === '409' ?
            <div className="alert alert-danger" role="alert"><strong>Duplicate Id.</strong></div> :
            <div className="alert alert-danger" role="alert"><strong>Failed to add screen.</strong></div> :
          null
        }
        <div className="form-group">
          <button disabled={!valid || submitting} type="submit"
            className="btn btn-default">Add Screen</button>
        </div>
      </form>
    </div>
  </div>
);
AddScreen.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
  error: PropTypes.string
};
module.exports = AddScreen;
