const {
  RECEIVE_ADD_PDF_SUCCESS
} = require('../actions');
const pdfReducer = {};
pdfReducer.pdf = (state, action) => {
  switch (action.type) {
    case RECEIVE_ADD_PDF_SUCCESS:
      return action.pdf;
    default:
      return state;
  }
}
module.exports = pdfReducer;
