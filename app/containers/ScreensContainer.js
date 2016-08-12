const { connect } = require('react-redux');
// IMPORT ACCESSORS
const {
  getAllScreens,
  getIsFetchingScreens,
  getIsErrorFetchingScreens,
  getSelectedScreen,
  getIsUpdatingScreen,
  getIsErrorUpdatingScreen
} = require('../reducers/');
// END
// IMPORT ACTION CREATORS
const { fetchScreens, selectScreen, updateScreen } = require('../actions');
// END
const ScreensCustomContainer = require('./ScreensCustomContainer');
const mapStateToProps = (state) => ({
  screens: getAllScreens(state),
  isFetching: getIsFetchingScreens(state),
  isErrorFetching: getIsErrorFetchingScreens(state),
  selectedScreen: getSelectedScreen(state),
  isUpdating: getIsUpdatingScreen(state),
  isErrorUpdating: getIsErrorUpdatingScreen(state)
});
const ScreensContainer = connect(
  mapStateToProps,
  { fetchScreens, selectScreen, updateScreen }
)(ScreensCustomContainer);
module.exports = ScreensContainer;
