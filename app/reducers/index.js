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
const {
  pdfs,
  getAllPdfs,
  getIsFetchingPdfs,
  getIsErrorFetchingPdfs,
  getLastPdfAddTime
} = require('./pdfsReducer');
const index = {};
// REDUCERS
index.app = combineReducers({
  form: formReducer,
  screens,
  pdfs
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
index.getAllPdfs = (state) => {
  return getAllPdfs(state.pdfs);
}
index.getIsFetchingPdfs = (state) => {
  return getIsFetchingPdfs(state.pdfs);
}
index.getIsErrorFetchingPdfs = (state) => {
  return getIsErrorFetchingPdfs(state.pdfs);
};
index.getLastPdfAddTime = (state) => {
  return getLastPdfAddTime(state.pdfs);
};
// END
module.exports = index;
