const { combineReducers } = require('redux');
const formReducer = require('redux-form').reducer;
const {
  screens,
  getAllScreens,
  getIsFetchingScreens,
  getIsErrorFetchingScreens,
  getSelectedScreen,
  getIsUpdatingScreen,
  getIsErrorUpdatingScreen
} = require('./screensReducer');
const index = {};
// REDUCERS
index.app = combineReducers({
  form: formReducer,
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
