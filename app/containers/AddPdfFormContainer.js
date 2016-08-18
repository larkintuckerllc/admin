const isPdf = /\.pdf$/i;
const {reduxForm} = require('redux-form');
const { ADD_PDF_FORM } = require('../actions');
const AddPdf = require('../components/AddPdf');
const validate = values => {
  const errors = {};
  if (values.file === undefined) {
    errors.file = 'Required.'
  } else {
    if (!isPdf.test(values.file[0].name)) {
      errors.file = "Not PDF."
    }
  }
  return errors;
};
const AddPdfFormContainer = reduxForm({
  form: ADD_PDF_FORM,
  validate
})(AddPdf);
module.exports = AddPdfFormContainer;
