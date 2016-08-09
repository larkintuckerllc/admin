const { combineReducers } = require('redux');
const { ADD_SCREEN } = require('../actions');
const { screen } = require('./screenReducer');
const screensReducer = {};
const byId = (state = {}, action) => {
  switch(action.type) {
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
    case ADD_SCREEN:
      return [...state, action.id];
    default:
      return state;
  }
};
screensReducer.screens = combineReducers({
  byId,
  allIds
});
screensReducer.getAllScreens = (state) =>
  state.allIds.map(id => state.byId[id]);
module.exports = screensReducer;
