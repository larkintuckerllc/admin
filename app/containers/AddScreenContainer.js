const { connect } = require('react-redux');
const AddScreen = require('../components/AddScreen');
const { addScreen } = require('../actions');
const mapDispatchToProps = (dispatch) => {
  return {
    onAddScreen: () => {
      dispatch(addScreen('sdog', 'Super Dog'));
    }
  }
};
const AddScreenContainer = connect(
  null,
  mapDispatchToProps
)(AddScreen);
module.exports = AddScreenContainer;
