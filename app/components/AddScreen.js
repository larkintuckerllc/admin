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
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <form onSubmit={onAddScreen}>
          <div className={'form-group' +
            ((isErrorAdding && errorAddingMessage === '409') ?
              ' has-error' : '')}>
            <label htmlFor="id" className="control-label">Id</label>
            <input disabled={isAdding} id="id" className="form-control" type="text" placeholder="id" value={id} onChange={onChangeId} />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="control-label">Description</label>
            <input disabled={isAdding} id="description" className="form-control" type="text" placeholder="description" value={description} onChange={onChangeDescription} />
          </div>
          {
            isErrorAdding ?
              errorAddingMessage === '409' ?
                <div className="alert alert-danger" role="alert"><strong>Duplicate Id.</strong></div> :
                <div className="alert alert-danger" role="alert"><strong>Failed to add screen.</strong></div> :
              null
          }
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
