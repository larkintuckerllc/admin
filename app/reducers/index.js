const { combineReducers } = require('redux');
const { screens, getAllScreens, getIsFetchingScreens, getIsErrorScreens } = require('./screensReducer');
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
index.getIsErrorScreens = (state) => {
  return getIsErrorScreens(state.screens);
}
module.exports = index;
