const ADD_SCREEN = 'ADD_SCREEN';
const REQUEST_SCREENS = 'REQUEST_SCREENS';
const RECEIVE_SCREENS_SUCCESS = 'RECEIVE_SCREENS_SUCCESS';
const RECEIVE_SCREENS_ERROR = 'RECEIVE_SCREENS_ERROR';
const { fetchScreens } = require('./api/');
const receiveScreensSuccess = (screens) => ({
  type: RECEIVE_SCREENS_SUCCESS,
  screens: screens
});
const receiveScreensError = () => ({
  type: RECEIVE_SCREENS_ERROR
});
let actions = {};
actions.ADD_SCREEN = ADD_SCREEN;
actions.REQUEST_SCREENS = REQUEST_SCREENS;
actions.RECEIVE_SCREENS_SUCCESS = RECEIVE_SCREENS_SUCCESS;
actions.RECEIVE_SCREENS_ERROR = RECEIVE_SCREENS_ERROR;
actions.addScreen = (id, description) => ({
  type: ADD_SCREEN,
  id: id,
  description: description
});
actions.requestScreens = () => ({
  type: REQUEST_SCREENS
});
actions.fetchScreens = () =>
  fetchScreens()
    .then(screens => receiveScreensSuccess(screens))
    .catch(() => receiveScreensError());
module.exports = actions;
