const REQUEST_SCREENS = 'REQUEST_SCREENS';
const RECEIVE_SCREENS_SUCCESS = 'RECEIVE_SCREENS_SUCCESS';
const RECEIVE_SCREENS_ERROR = 'RECEIVE_SCREENS_ERROR';
const REQUEST_ADD_SCREEN = 'REQUEST_ADD_SCREEN';
const RECEIVE_ADD_SCREEN_SUCCESS = 'RECEIVE_ADD_SCREEN_SUCCESS';
const RECEIVE_ADD_SCREEN_ERROR = 'RECEIVE_ADD_SCREEN_ERROR';
const { fetchScreens, addScreen } = require('./api/');
const receiveScreensSuccess = (screens) => ({
  type: RECEIVE_SCREENS_SUCCESS,
  screens
});
const receiveScreensError = () => ({
  type: RECEIVE_SCREENS_ERROR
});
const receiveAddScreenSuccess = (screen) => ({
  type: RECEIVE_ADD_SCREEN_SUCCESS,
  screen
});
const receiveAddScreenError = (message) => ({
  type: RECEIVE_ADD_SCREEN_ERROR,
  message
});
let actions = {};
actions.REQUEST_SCREENS = REQUEST_SCREENS;
actions.RECEIVE_SCREENS_SUCCESS = RECEIVE_SCREENS_SUCCESS;
actions.RECEIVE_SCREENS_ERROR = RECEIVE_SCREENS_ERROR;
actions.REQUEST_ADD_SCREEN = REQUEST_ADD_SCREEN;
actions.RECEIVE_ADD_SCREEN_SUCCESS = RECEIVE_ADD_SCREEN_SUCCESS;
actions.RECEIVE_ADD_SCREEN_ERROR = RECEIVE_ADD_SCREEN_ERROR;
const requestScreens = () => ({
  type: REQUEST_SCREENS
});
const requestAddScreen = () => ({
  type: REQUEST_ADD_SCREEN
});
actions.fetchScreens = () => (dispatch) => {
  dispatch(requestScreens());
  return (fetchScreens()
    .then(screens => dispatch(receiveScreensSuccess(screens)))
    .catch(() => dispatch(receiveScreensError())));
}
actions.addScreen = (id, description) => (dispatch) => {
  dispatch(requestAddScreen());
  return(addScreen(id, description)
    .then(screen => dispatch(receiveAddScreenSuccess(screen)))
    .catch((err) => dispatch(receiveAddScreenError(err.message))));
  }
module.exports = actions;
