const {reduxForm} = require('redux-form');
const { ADD_SCREEN_FORM } = require('../actions');
const AddScreen = require('../components/AddScreen');
const validate = values => {
  const errors = {};
  if (values.id === undefined) {
    errors.id = 'Required.'
  }
  return errors;
};
const AddScreenContainer = reduxForm({
  form: ADD_SCREEN_FORM,
  validate
})(AddScreen);
module.exports = AddScreenContainer;
