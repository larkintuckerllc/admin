const { combineReducers } = require('redux');
const {
  REQUEST_PDFS,
  RECEIVE_PDFS_SUCCESS,
  RECEIVE_PDFS_ERROR,
  RECEIVE_ADD_PDF_SUCCESS
} = require('../actions');
const { pdf } = require('./pdfReducer');
const pdfsReducer = {};
// REDUCERS
const byId = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_PDFS_SUCCESS: {
      const nextState = Object.assign(
        {},
        state
      );
      action.pdfs.forEach(pdf => {
        nextState[pdf.id] = pdf
      });
      return nextState;
    }
    case RECEIVE_ADD_PDF_SUCCESS: {
      return Object.assign(
        {},
        state,
        { [action.pdf.id]: pdf(state[action.pdf.id], action )}
      );
    }
    default:
      return state;
  }
}
const allIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PDFS_SUCCESS:
      return action.pdfs.map(pdf => pdf.id);
    case RECEIVE_ADD_PDF_SUCCESS:
      return [...state, action.pdf.id];
    default:
      return state;
  }
};
const isFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_PDFS:
      return true;
    case RECEIVE_PDFS_SUCCESS:
    case RECEIVE_PDFS_ERROR:
      return false;
    default:
      return state;
  }
}
const isErrorFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_PDFS:
      return false;
    case RECEIVE_PDFS_SUCCESS:
      return false;
    case RECEIVE_PDFS_ERROR:
      return true;
    default:
      return state;
  }
}
const lastPdfAddTime = (state = -1, action) => {
  switch (action.type) {
    case RECEIVE_ADD_PDF_SUCCESS:
      return Date.now();
    default:
      return state;
  }
}
pdfsReducer.pdfs = combineReducers({
  byId,
  allIds,
  isFetching,
  isErrorFetching,
  lastPdfAddTime
});
// END
// ACCESSORS
pdfsReducer.getAllPdfs = (state) =>
  state.allIds.map(id => state.byId[id]);
pdfsReducer.getIsFetchingPdfs = (state) =>
  state.isFetching;
pdfsReducer.getIsErrorFetchingPdfs = (state) =>
  state.isErrorFetching;
pdfsReducer.getLastPdfAddTime = (state) =>
  state.lastPdfAddTime;
// END
module.exports = pdfsReducer;
