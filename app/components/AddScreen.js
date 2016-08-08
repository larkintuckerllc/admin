const React = require('react');
const { PropTypes } = React;
// TODO: USE BOOTSTRAP FORM ELEMENTS
const AddScreen = ({ id, description, onAddScreen, onChangeId, onChangeDescription }) => (
  <form onSubmit={onAddScreen}>
    <input type="text" placeholder="id" value={id} onChange={onChangeId} />
    <input type="text" placeholder="description" value={description} onChange={onChangeDescription} />
    <button type="submi">add screen</button>
  </form>
);
AddScreen.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onChangeId: PropTypes.func.isRequired,
  onChangeDescription: PropTypes.func.isRequired,
  onAddScreen: PropTypes.func.isRequired
};
module.exports = AddScreen;
