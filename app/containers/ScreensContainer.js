const { connect } = require('react-redux');
const { getAllScreens} = require('../reducers/');
const ScreensDataContainer = require('./ScreensDataContainer');
const { fetchScreens } = require('../actions');
const mapStateToProps = (state) => ({
  screens: getAllScreens(state)
});
const ScreensContainer = connect(
  mapStateToProps,
  { fetchScreens }
)(ScreensDataContainer);
module.exports = ScreensContainer;
