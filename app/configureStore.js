const { createStore } = require('redux');
const throttle = require('lodash/throttle');
const { loadState, saveState } = require('./localStorage');
const { app } = require('./reducers/');
const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(app, persistedState);
  store.subscribe(throttle(() => {
    saveState({
      screens: store.getState().screens
    });
  }, 1000));
  return store;
}
module.exports = configureStore;
