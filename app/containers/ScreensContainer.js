const { connect } = require('react-redux');
const { getAllScreens, getIsFetchingScreens} = require('../reducers/');
const ScreensDataContainer = require('./ScreensDataContainer');
const { requestScreens, fetchScreens } = require('../actions');
const mapStateToProps = (state) => ({
  screens: getAllScreens(state),
  isFetching: getIsFetchingScreens(state)
});
const ScreensContainer = connect(
  mapStateToProps,
  { requestScreens, fetchScreens }
)(ScreensDataContainer);
module.exports = ScreensContainer;
