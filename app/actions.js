// REDUX-FORM FORMS
const ADD_SCREEN_FORM = 'addScreenForm';
const ADD_PDF_FORM = 'addPdfForm';
//END
const PREFIX = 'app/';
// ACTION STRINGS
const REQUEST_SCREENS = `${PREFIX}REQUEST_SCREENS`;
const RECEIVE_SCREENS_SUCCESS = `${PREFIX}RECEIVE_SCREENS_SUCCESS`;
const RECEIVE_SCREENS_ERROR = `${PREFIX}RECEIVE_SCREENS_ERROR`;
const REQUEST_ADD_SCREEN = `${PREFIX}REQUEST_ADD_SCREEN`;
const RECEIVE_ADD_SCREEN_SUCCESS = `${PREFIX}RECEIVE_ADD_SCREEN_SUCCESS`;
const RECEIVE_ADD_SCREEN_ERROR = `${PREFIX}RECEIVE_ADD_SCREEN_ERROR`;
const SELECT_SCREEN = `${PREFIX}SELECT_SCREEN`;
const REQUEST_UPDATE_SCREEN = `${PREFIX}REQUEST_UPDATE_SCREEN`;
const RECEIVE_UPDATE_SCREEN_SUCCESS = `${PREFIX}RECEIVE_UPDATE_SCREEN_SUCCESS`;
const RECEIVE_UPDATE_SCREEN_ERROR = `${PREFIX}RECEIVE_UPDATE_SCREEN_ERROR`;
const REQUEST_PDFS = `${PREFIX}REQUEST_PDFS`;
const RECEIVE_PDFS_SUCCESS = `${PREFIX}RECEIVE_PDFS_SUCCESS`;
const RECEIVE_PDFS_ERROR = `${PREFIX}RECEIVE_PDFS_ERROR`;
const REQUEST_ADD_PDF = `${PREFIX}REQUEST_ADD_PDF`;
const RECEIVE_ADD_PDF_SUCCESS = `${PREFIX}RECEIVE_ADD_PDF_SUCCESS`;
const RECEIVE_ADD_PDF_ERROR = `${PREFIX}RECEIVE_ADD_PDF_ERROR`;
// END
const {
  fetchScreens,
  addScreen,
  updateScreen,
  fetchPdfs,
  addPdf
} = require('./api/');
const { reset, SubmissionError } = require('redux-form');
// ACTION CREATORS
const requestScreens = () => ({
  type: REQUEST_SCREENS
});
const receiveScreensSuccess = (screens) => ({
  type: RECEIVE_SCREENS_SUCCESS,
  screens
});
const receiveScreensError = () => ({
  type: RECEIVE_SCREENS_ERROR
});
const requestAddScreen = () => ({
  type: REQUEST_ADD_SCREEN
});
const receiveAddScreenSuccess = (screen) => ({
  type: RECEIVE_ADD_SCREEN_SUCCESS,
  screen
});
const receiveAddScreenError = (message) => ({
  type: RECEIVE_ADD_SCREEN_ERROR,
  message
});
const requestUpdateScreen = (id, description) => ({
  type: REQUEST_UPDATE_SCREEN,
  id,
  description
});
const receiveUpdateScreenSuccess = (screen) => ({
  type: RECEIVE_UPDATE_SCREEN_SUCCESS,
  screen
});
const receiveUpdateScreenError = () => ({
  type: RECEIVE_UPDATE_SCREEN_ERROR
});
const requestPdfs = () => ({
  type: REQUEST_PDFS
});
const receivePdfsSuccess = (pdfs) => ({
  type: RECEIVE_PDFS_SUCCESS,
  pdfs
});
const receivePdfsError = () => ({
  type: RECEIVE_PDFS_ERROR
});
const requestAddPdf = () => ({
  type: REQUEST_ADD_PDF
});
const receiveAddPdfSuccess = (pdf) => ({
  type: RECEIVE_ADD_PDF_SUCCESS,
  pdf
});
const receiveAddPdfError = (message) => ({
  type: RECEIVE_ADD_PDF_ERROR,
  message
});
// END
let actions = {};
// REDUX-FORM FORMS
actions.ADD_SCREEN_FORM = ADD_SCREEN_FORM;
actions.ADD_PDF_FORM = ADD_PDF_FORM;
// END
// ACTION STRINGS EXPORT
actions.REQUEST_SCREENS = REQUEST_SCREENS;
actions.RECEIVE_SCREENS_SUCCESS = RECEIVE_SCREENS_SUCCESS;
actions.RECEIVE_SCREENS_ERROR = RECEIVE_SCREENS_ERROR;
actions.REQUEST_ADD_SCREEN = REQUEST_ADD_SCREEN;
actions.RECEIVE_ADD_SCREEN_SUCCESS = RECEIVE_ADD_SCREEN_SUCCESS;
actions.RECEIVE_ADD_SCREEN_ERROR = RECEIVE_ADD_SCREEN_ERROR;
actions.SELECT_SCREEN = SELECT_SCREEN;
actions.REQUEST_UPDATE_SCREEN = REQUEST_UPDATE_SCREEN;
actions.RECEIVE_UPDATE_SCREEN_SUCCESS = RECEIVE_UPDATE_SCREEN_SUCCESS;
actions.RECEIVE_UPDATE_SCREEN_ERROR = RECEIVE_UPDATE_SCREEN_ERROR;
actions.REQUEST_PDFS = REQUEST_PDFS;
actions.RECEIVE_PDFS_SUCCESS = RECEIVE_PDFS_SUCCESS;
actions.RECEIVE_PDFS_ERROR = RECEIVE_PDFS_ERROR;
actions.REQUEST_ADD_PDF = REQUEST_ADD_PDF;
actions.RECEIVE_ADD_PDF_SUCCESS = RECEIVE_ADD_PDF_SUCCESS;
actions.RECEIVE_ADD_PDF_ERROR = RECEIVE_ADD_PDF_ERROR;
// END
// ACTION CREATORS EXPORT
actions.fetchScreens = () => (dispatch) => {
  dispatch(requestScreens());
  return (fetchScreens()
    .then(screens => dispatch(receiveScreensSuccess(screens)))
    .catch(() => dispatch(receiveScreensError())));
}
actions.addScreen = (id, description) => (dispatch) => {
  dispatch(requestAddScreen());
  return(addScreen(id, description)
    .then(screen => {
      dispatch(receiveAddScreenSuccess(screen));
      dispatch(reset(ADD_SCREEN_FORM));
    })
    .catch((err) => {
      dispatch(receiveAddScreenError(err.message))
      throw new SubmissionError({_error: err.message})
    }));
}
actions.selectScreen = (id) => ({
  type: SELECT_SCREEN,
  id
});
actions.updateScreen = (id, description) => (dispatch) => {
  dispatch(requestUpdateScreen(id, description));
  return(updateScreen(id, description)
    .then((screen) => dispatch(receiveUpdateScreenSuccess(screen)))
    .catch(() => dispatch(receiveUpdateScreenError())));
};
actions.fetchPdfs = () => (dispatch) => {
  dispatch(requestPdfs());
  return (fetchPdfs()
    .then(pdfs => dispatch(receivePdfsSuccess(pdfs)))
    .catch(() => dispatch(receivePdfsError())));
}
actions.addPdf = (file) => (dispatch) => {
  dispatch(requestAddPdf());
  return(addPdf(file)
    .then(pdf => {
      dispatch(receiveAddPdfSuccess(pdf));
      dispatch(reset(ADD_PDF_FORM));
    })
    .catch((err) => {
      dispatch(receiveAddPdfError(err))
      throw new SubmissionError({_error: err})
    }));
}
// END
module.exports = actions;
