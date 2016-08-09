const { ADD_SCREEN } = require('../actions');
const screen = (state, action) => {
  switch (action.type) {
    case ADD_SCREEN:
      return {
          id: action.id,
          description: action.description
      };
    default:
      return state;
  }
}
module.exports = screen;
