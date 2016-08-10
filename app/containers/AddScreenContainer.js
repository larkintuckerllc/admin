const { connect } = require('react-redux');
const { addScreen } = require('../actions');
const { getAllScreens, getIsFetchingScreens} = require('../reducers/');
const AddScreenLocalContainer = require('./AddScreenLocalContainer');
const mapStateToProps = (state) => ({
  screens: getAllScreens(state),
  isFetching: getIsFetchingScreens(state)
});
const AddScreenContainer = connect(
  mapStateToProps,
  { handleAddScreen: addScreen }
)(AddScreenLocalContainer);
module.exports = AddScreenContainer;
