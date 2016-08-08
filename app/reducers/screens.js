const { ADD_SCREEN } = require('../actions');
const screen = require('./screen');
const screens = (state = [], action) => {
  switch (action.type) {
    case ADD_SCREEN:
      return [
        ...state,
        screen(undefined, action)
      ];
    case 'UPDATE_DESCRIPTION':
      return state.map(o => {
        screen(o, action)
      })
    default:
      return state;
  }
}
module.exports = screens;
