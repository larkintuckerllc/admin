const Screens = require('../components/Screens');
const { connect } = require('react-redux');
const mapStateToProps = (state) => {
  return {
    screens: state.screens
  };
}
const ScreensContainer = connect(
  mapStateToProps,
  null
)(Screens);
module.exports = ScreensContainer;
