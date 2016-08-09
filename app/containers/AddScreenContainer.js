const { connect } = require('react-redux');
const { addScreen } = require('../actions');
const AddScreenLocalContainer = require('./AddScreenLocalContainer');
const AddScreenContainer = connect(
  null,
  { handleAddScreen: addScreen }
)(AddScreenLocalContainer);
module.exports = AddScreenContainer;
