const { connect } = require('react-redux');
const { addScreen } = require('../actions');
const {
  getAllScreens,
  getIsFetchingScreens,
  getIsErrorFetchingScreens,
  getIsAddingScreen,
  getIsErrorAddingScreen,
  getIsSuccessAddingScreen,
  getErrorAddingMessageScreen
} = require('../reducers/');
const AddScreenCustomContainer = require('./AddScreenCustomContainer');
const mapStateToProps = (state) => ({
  screens: getAllScreens(state),
  isFetching: getIsFetchingScreens(state),
  isErrorFetching: getIsErrorFetchingScreens(state),
  isAdding: getIsAddingScreen(state),
  isErrorAdding: getIsErrorAddingScreen(state),
  isSuccessAdding: getIsSuccessAddingScreen(state),
  errorAddingMessage: getErrorAddingMessageScreen(state)
});
const AddScreenContainer = connect(
  mapStateToProps,
  { addScreen }
)(AddScreenCustomContainer);
module.exports = AddScreenContainer;
