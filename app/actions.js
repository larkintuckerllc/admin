// REDUX-FORM FORMS
const ADD_SCREEN_FORM = 'addScreenForm';
//END
const PREFIX = 'app/';
// ACTION STRINGS
const REQUEST_SCREENS = PREFIX + 'REQUEST_SCREENS';
const RECEIVE_SCREENS_SUCCESS = PREFIX + 'RECEIVE_SCREENS_SUCCESS';
const RECEIVE_SCREENS_ERROR = PREFIX + 'RECEIVE_SCREENS_ERROR';
const REQUEST_ADD_SCREEN = PREFIX + 'REQUEST_ADD_SCREEN';
const RECEIVE_ADD_SCREEN_SUCCESS = PREFIX + 'RECEIVE_ADD_SCREEN_SUCCESS';
const RECEIVE_ADD_SCREEN_ERROR = PREFIX + 'RECEIVE_ADD_SCREEN_ERROR';
const SELECT_SCREEN = PREFIX + 'SELECT_SCREEN';
const REQUEST_UPDATE_SCREEN = PREFIX + 'REQUEST_UPDATE_SCREEN';
const RECEIVE_UPDATE_SCREEN_SUCCESS = PREFIX + 'RECEIVE_UPDATE_SCREEN_SUCCESS';
const RECEIVE_UPDATE_SCREEN_ERROR = PREFIX + 'RECEIVE_UPDATE_SCREEN_ERROR';
// END
const { fetchScreens, addScreen, updateScreen } = require('./api/');
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
// END
let actions = {};
// REDUX-FORM FORMS
actions.ADD_SCREEN_FORM = ADD_SCREEN_FORM;
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
// END
// ACTION CREATORS EXPORT
actions.fetchScreens = () => (dispatch) => {
  dispatch(requestScreens());
  return (fetchScreens()
    .then(screens => dispatch(receiveScreensSuccess(screens)))
    .catch(() => dispatch(receiveScreensError())));
}
// TODO: WORRIED ABOUT STRING CONSTANTS
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
// END
module.exports = actions;
