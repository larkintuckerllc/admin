const { combineReducers } = require('redux');
const { ADD_SCREEN, REQUEST_SCREENS, RECEIVE_SCREENS_SUCCESS, RECEIVE_SCREENS_ERROR } = require('../actions');
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
    case ADD_SCREEN:
      return Object.assign(
        {},
        state,
        { [action.id]: screen(state[action.id], action) }
      );
    default:
      return state;
  }
}
const allIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SCREENS_SUCCESS:
      return action.screens.map(screen => screen.id);
    case ADD_SCREEN:
      return [...state, action.id];
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
const isError = (state = false, action) => {
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
screensReducer.screens = combineReducers({
  byId,
  allIds,
  isFetching,
  isError
});
screensReducer.getAllScreens = (state) =>
  state.allIds.map(id => state.byId[id]);
screensReducer.getIsFetchingScreens = (state) =>
  state.isFetching;
screensReducer.getIsErrorScreens = (state) =>
  state.isError;
module.exports = screensReducer;
