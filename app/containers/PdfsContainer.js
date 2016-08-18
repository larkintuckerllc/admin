const { connect } = require('react-redux');
// IMPORT ACCESSORS
const {
  getAllPdfs,
  getIsFetchingPdfs,
  getIsErrorFetchingPdfs,
} = require('../reducers/');
// END
// IMPORT ACTION CREATORS
const { fetchPdfs } = require('../actions');
// END
const PdfsCustomContainer = require('./PdfsCustomContainer');
const mapStateToProps = (state) => ({
  pdfs: getAllPdfs(state),
  isFetching: getIsFetchingPdfs(state),
  isErrorFetching: getIsErrorFetchingPdfs(state)
});
const PdfsContainer = connect(
  mapStateToProps,
  { fetchPdfs }
)(PdfsCustomContainer);
module.exports = PdfsContainer;
