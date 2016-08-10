const { combineReducers } = require('redux');
const {
  screens,
  getAllScreens,
  getIsFetchingScreens,
  getIsErrorFetchingScreens,
  getIsAddingScreen,
  getIsErrorAddingScreen,
  getIsSuccessAddingScreen,
  getErrorAddingMessageScreen
} = require('./screensReducer');
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
index.getIsErrorFetchingScreens = (state) => {
  return getIsErrorFetchingScreens(state.screens);
}
index.getIsAddingScreen = (state) => {
  return getIsAddingScreen(state.screens);
}
index.getIsErrorAddingScreen = (state) => {
  return getIsErrorAddingScreen(state.screens);
}
index.getIsSuccessAddingScreen = (state) => {
  return getIsSuccessAddingScreen(state.screens);
}
index.getErrorAddingMessageScreen = (state) => {
  return getErrorAddingMessageScreen(state.screens);
}
module.exports = index;
