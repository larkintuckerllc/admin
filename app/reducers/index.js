const { combineReducers } = require('redux');
const { screens, getAllScreens, getIsFetchingScreens } = require('./screensReducer');
const index = {};
index.app = combineReducers({
  screens
});
index.getAllScreens = (state) => {
  return getAllScreens(state.screens);
};
index.getIsFetchingScreens = (state) => {
  return getIsFetchingScreens(state.screens);
}
module.exports = index;
