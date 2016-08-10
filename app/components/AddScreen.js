const React = require('react');
const { PropTypes } = React;
const AddScreen = ({
  id,
  description,
  onAddScreen,
  onChangeId,
  onChangeDescription,
  screens,
  isFetching,
  isErrorFetching,
  isAdding,
  isErrorAdding,
  errorAddingMessage
}) => {
  if ((isFetching && screens.length === 0) || isErrorFetching) {
    return null;
  }
  // TODO: HANDLE ERROR MESSAGE TYPE - 409
  window.console.log(errorAddingMessage);

  const errorAddingEl = isErrorAdding ?
    <div className="alert alert-danger" role="alert"><strong>Failed to add screen.</strong></div> :
    null;
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <form onSubmit={onAddScreen}>
          <div className="form-group">
            <label htmlFor="id">Id</label>
            <input disabled={isAdding} id="id" className="form-control" type="text" placeholder="id" value={id} onChange={onChangeId} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input disabled={isAdding} id="description" className="form-control" type="text" placeholder="description" value={description} onChange={onChangeDescription} />
          </div>
          {errorAddingEl}
          <div className="form-group">
            <button disabled={isAdding | id === ''} type="submit" className="btn btn-default">Add Screen</button>
          </div>
        </form>
      </div>
    </div>
  );
};
AddScreen.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onChangeId: PropTypes.func.isRequired,
  onChangeDescription: PropTypes.func.isRequired,
  onAddScreen: PropTypes.func.isRequired,
  screens: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isErrorFetching: PropTypes.bool.isRequired,
  isAdding: PropTypes.bool.isRequired,
  isErrorAdding: PropTypes.bool.isRequired,
  errorAddingMessage: PropTypes.string
};
module.exports = AddScreen;
