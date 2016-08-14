const { connect } = require('react-redux');
const { addScreen } = require('../actions');
const AddScreenCustomContainer = require('./AddScreenCustomContainer');
const AddScreenContainer = connect(
  null,
  { addScreen }
)(AddScreenCustomContainer);
module.exports = AddScreenContainer;
