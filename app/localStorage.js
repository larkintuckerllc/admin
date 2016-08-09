const localStorage = {};
localStorage.loadState = () => {
  try {
    const serializedState = window.localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}
localStorage.saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem('state', serializedState);
  } catch (err) {
    // IGNORE FOR NOW
  }
}
module.exports = localStorage;
