const { createStore } = require('redux');
const throttle = require('lodash/throttle');
const { loadState, saveState } = require('./localStorage');
const { app } = require('./reducers/');
const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  if (!window.console.group) {
    return rawDispatch;
  }
  return (action) => {
    window.console.group(action.type);
    window.console.log('%c prev state', 'color: gray', store.getState());
    window.console.log('%c action', 'color: blue', action);
    const returnValue = rawDispatch(action);
    window.console.log('%c next state', 'color: green', store.getState());
    window.console.groupEnd(action.type);
    return returnValue;
  }
};
const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(app, persistedState);
  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store);
  }
  store.subscribe(throttle(() => {
    saveState({
      screens: store.getState().screens
    });
  }, 1000));
  return store;
}
module.exports = configureStore;
