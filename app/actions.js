const ADD_SCREEN = 'ADD_SCREEN';
const REQUEST_SCREENS = 'REQUEST_SCREENS';
const RECEIVE_SCREENS = 'RECEIVE_SCREENS';
const { fetchScreens } = require('./api/');
const receiveScreens = (screens) => ({
  type: RECEIVE_SCREENS,
  screens: screens
});
let actions = {};
actions.ADD_SCREEN = ADD_SCREEN;
actions.REQUEST_SCREENS = REQUEST_SCREENS;
actions.RECEIVE_SCREENS = RECEIVE_SCREENS;
actions.addScreen = (id, description) => ({
  type: ADD_SCREEN,
  id: id,
  description: description
});
actions.requestScreens = () => ({
  type: REQUEST_SCREENS
});
actions.fetchScreens = () =>
  fetchScreens().then(screens =>
    receiveScreens(screens)
  );
module.exports = actions;
