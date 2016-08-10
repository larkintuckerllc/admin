const ADD_SCREEN = 'ADD_SCREEN';
const RECEIVE_SCREENS = 'RECEIVE_SCREENS';
const { fetchScreens } = require('./api/');
let actions = {};
actions.ADD_SCREEN = ADD_SCREEN;
actions.RECEIVE_SCREENS = RECEIVE_SCREENS;
actions.addScreen = (id, description) => ({
  type: ADD_SCREEN,
  id: id,
  description: description
});
const receiveScreens = (screens) => ({
  type: RECEIVE_SCREENS,
  screens: screens
});
actions.fetchScreens = () =>
  fetchScreens().then(screens =>
    receiveScreens(screens)
  )
module.exports = actions;
