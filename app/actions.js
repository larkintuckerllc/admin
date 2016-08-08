const ADD_SCREEN = 'ADD_SCREEN';
let actions = {};
actions.ADD_SCREEN = ADD_SCREEN;
actions.addScreen = (id, description) => ({
  type: ADD_SCREEN,
  id: id,
  description: description
});
module.exports = actions;
