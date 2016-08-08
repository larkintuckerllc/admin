const flagExample = (state = true, action) => {
  switch (action.type) {
    case 'TOGGLE_FLAG':
      return !state;
    default:
      return state;
  }
}
module.exports = flagExample;
