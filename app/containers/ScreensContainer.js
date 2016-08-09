const { connect } = require('react-redux');
const Screens = require('../components/Screens');
const { getAllScreens} = require('../reducers/');
const mapStateToProps = (state) => ({
  screens: getAllScreens(state)
});
const ScreensContainer = connect(
  mapStateToProps,
  null
)(Screens);
module.exports = ScreensContainer;
