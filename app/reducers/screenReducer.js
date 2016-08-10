const { RECEIVE_ADD_SCREEN_SUCCESS } = require('../actions');
const screenReducer = {};
screenReducer.screen = (state, action) => {
  switch (action.type) {
    case RECEIVE_ADD_SCREEN_SUCCESS:
      return action.screen;
    default:
      return state;
  }
}
module.exports = screenReducer;
