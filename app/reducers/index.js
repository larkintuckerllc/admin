const { combineReducers } = require('redux');
const {
  screens,
  getAllScreens,
  getIsFetchingScreens,
  getIsErrorFetchingScreens,
  getIsAddingScreen,
  getIsErrorAddingScreen,
  getIsSuccessAddingScreen,
  getErrorAddingMessageScreen,
  getSelectedScreen,
  getIsUpdatingScreen,
  getIsErrorUpdatingScreen
} = require('./screensReducer');
const index = {};
// REDUCERS
index.app = combineReducers({
  screens
});
// END
// ACCESSSORS
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
index.getSelectedScreen = (state) => {
  return getSelectedScreen(state.screens);
}
index.getIsUpdatingScreen = (state) => {
  return getIsUpdatingScreen(state.screens);
}
index.getIsErrorUpdatingScreen = (state) => {
  return getIsErrorUpdatingScreen(state.screens);
}
// END
module.exports = index;
