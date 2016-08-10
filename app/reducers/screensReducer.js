const { combineReducers } = require('redux');
const {
  REQUEST_SCREENS,
  RECEIVE_SCREENS_SUCCESS,
  RECEIVE_SCREENS_ERROR,
  REQUEST_ADD_SCREEN,
  RECEIVE_ADD_SCREEN_SUCCESS,
  RECEIVE_ADD_SCREEN_ERROR
} = require('../actions');
const { screen } = require('./screenReducer');
const screensReducer = {};
const byId = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_SCREENS_SUCCESS: {
      const nextState = Object.assign(
        {},
        state
      );
      action.screens.forEach(screen => {
        nextState[screen.id] = screen
      });
      return nextState;
    }
    case RECEIVE_ADD_SCREEN_SUCCESS:
      return Object.assign(
        {},
        state,
        { [action.screen.id]: screen(state[action.screen.id], action) }
      );
    default:
      return state;
  }
}
const allIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SCREENS_SUCCESS:
      return action.screens.map(screen => screen.id);
    case RECEIVE_ADD_SCREEN_SUCCESS:
      return [...state, action.screen.id];
    default:
      return state;
  }
};
const isFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_SCREENS:
      return true;
    case RECEIVE_SCREENS_SUCCESS:
    case RECEIVE_SCREENS_ERROR:
      return false;
    default:
      return state;
  }
}
const isErrorFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_SCREENS:
      return false;
    case RECEIVE_SCREENS_SUCCESS:
      return false;
    case RECEIVE_SCREENS_ERROR:
      return true;
    default:
      return state;
  }
}
const isAdding = (state = false, action) => {
  switch (action.type) {
    case REQUEST_ADD_SCREEN:
      return true;
    case RECEIVE_ADD_SCREEN_SUCCESS:
    case RECEIVE_ADD_SCREEN_ERROR:
      return false;
    default:
      return state;
  }
}
const isSuccessAdding = (state = false, action) => {
  switch (action.type) {
    case REQUEST_ADD_SCREEN:
      return false;
    case RECEIVE_ADD_SCREEN_SUCCESS:
      return true;
    default:
      return state;
  }
}
const isErrorAdding = (state = false, action) => {
  switch (action.type) {
    case REQUEST_ADD_SCREEN:
      return false;
    case RECEIVE_ADD_SCREEN_SUCCESS:
      return false;
    case RECEIVE_ADD_SCREEN_ERROR:
      return true;
    default:
      return state;
  }
}
const errorAddingMessage = (state = null, action) => {
  switch (action.type) {
    case REQUEST_ADD_SCREEN:
      return null;
    case RECEIVE_ADD_SCREEN_SUCCESS:
      return null;
    case RECEIVE_ADD_SCREEN_ERROR:
      return action.message;
    default:
      return state;
  }
}
screensReducer.screens = combineReducers({
  byId,
  allIds,
  isFetching,
  isErrorFetching,
  isAdding,
  isSuccessAdding,
  isErrorAdding,
  errorAddingMessage
});
screensReducer.getAllScreens = (state) =>
  state.allIds.map(id => state.byId[id]);
screensReducer.getIsFetchingScreens = (state) =>
  state.isFetching;
screensReducer.getIsErrorFetchingScreens = (state) =>
  state.isErrorFetching;
screensReducer.getIsAddingScreen = (state) =>
  state.isAdding;
screensReducer.getIsErrorAddingScreen = (state) =>
  state.isErrorAdding;
screensReducer.getIsSuccessAddingScreen = (state) =>
  state.isSuccessAdding;
screensReducer.getErrorAddingMessageScreen = (state) =>
  state.errorAddingMessage;
module.exports = screensReducer;
