const React = require('react');
const { PropTypes } = React;
const AddScreen = ({ id, description, onAddScreen, onChangeId, onChangeDescription }) => (
  <div className="panel panel-default">
    <div className="panel-body">
      <form onSubmit={onAddScreen}>
        <div className="form-group">
          <label htmlFor="id">Id</label>
          <input id="id" className="form-control" type="text" placeholder="id" value={id} onChange={onChangeId} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input id="description" className="form-control" type="text" placeholder="description" value={description} onChange={onChangeDescription} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-default">Add Screen</button>
        </div>
      </form>
    </div>
  </div>
);
AddScreen.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onChangeId: PropTypes.func.isRequired,
  onChangeDescription: PropTypes.func.isRequired,
  onAddScreen: PropTypes.func.isRequired
};
module.exports = AddScreen;
