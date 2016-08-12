const {
  RECEIVE_ADD_SCREEN_SUCCESS,
  RECEIVE_UPDATE_SCREEN_SUCCESS
} = require('../actions');
const screenReducer = {};
screenReducer.screen = (state, action) => {
  switch (action.type) {
    case RECEIVE_ADD_SCREEN_SUCCESS:
      return action.screen;
    case RECEIVE_UPDATE_SCREEN_SUCCESS:
      return Object.assign(
        {},
        state,
        { description: action.screen.description }
      );
    default:
      return state;
  }
}
module.exports = screenReducer;
