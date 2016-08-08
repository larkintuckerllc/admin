const screen = (state, action) => {
  switch (action.type) {
    case 'ADD_SCREEN':
      return {
          id: action.id,
          description: action.description
      };
    case 'UPDATE_DESCRIPTION':
      if (screen.id !== action.id) {
        return screen;
      }
      return Object.assign({}, screen, {
        description: action.description
      });
    default:
      return state;
  }
}
module.exports = screen;
