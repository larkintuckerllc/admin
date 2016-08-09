const { combineReducers } = require('redux');
const { screens, getAllScreens } = require('./screensReducer');
const index = {};
index.app = combineReducers({
  screens
});
index.getAllScreens = (state) => {
  return getAllScreens(state.screens);
};
module.exports = index;
