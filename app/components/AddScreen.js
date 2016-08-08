const React = require('react');
const { PropTypes } = require('react');
const AddScreen = ({onAddScreen}) => (
  <button onClick={onAddScreen}>add screen</button>
);
AddScreen.propTypes = {
  onAddScreen: PropTypes.func.isRequired
};
module.exports = AddScreen;
