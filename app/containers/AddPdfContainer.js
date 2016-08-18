const { connect } = require('react-redux');
const { addPdf } = require('../actions');
// IMPORT ACCESSORS
const {
  getLastPdfAddTime
} = require('../reducers/');
// END
const AddPdfCustomContainer = require('./AddPdfCustomContainer');
const mapStateToProps = (state) => ({
  lastPdfAddTime: getLastPdfAddTime(state)
});
const AddPdfContainer = connect(
  mapStateToProps,
  { addPdf }
)(AddPdfCustomContainer);
module.exports = AddPdfContainer;
