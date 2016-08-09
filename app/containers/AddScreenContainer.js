const { connect } = require('react-redux');
const { addScreen } = require('../actions');
const AddScreenLocalContainer = require('./AddScreenLocalContainer');
const mapDispatchToProps = (dispatch) => {
  return {
    handleAddScreen: (id, description) => {
      dispatch(addScreen(id, description))
    }
  }
};
const AddScreenContainer = connect(
  null,
  mapDispatchToProps
)(AddScreenLocalContainer);
module.exports = AddScreenContainer;
