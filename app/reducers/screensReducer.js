const { ADD_SCREEN } = require('../actions');
const { screen } = require('./screenReducer');
const screensReducer = {};
screensReducer.screens = (state = [], action) => {
  switch (action.type) {
    case ADD_SCREEN:
      return [
        ...state,
        screen(undefined, action)
      ];
    default:
      return state;
  }
}
screensReducer.getAllScreens = (state) => {
  return state;
};
module.exports = screensReducer;
