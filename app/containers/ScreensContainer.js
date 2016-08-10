const { connect } = require('react-redux');
const {
  getAllScreens,
  getIsFetchingScreens,
  getIsErrorFetchingScreens
} = require('../reducers/');
const ScreensCustomContainer = require('./ScreensCustomContainer');
const { requestScreens, fetchScreens } = require('../actions');
const mapStateToProps = (state) => ({
  screens: getAllScreens(state),
  isFetching: getIsFetchingScreens(state),
  isErrorFetching: getIsErrorFetchingScreens(state)
});
const ScreensContainer = connect(
  mapStateToProps,
  { requestScreens, fetchScreens }
)(ScreensCustomContainer);
module.exports = ScreensContainer;
