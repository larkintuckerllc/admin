const { createStore, applyMiddleware } = require('redux');
const throttle = require('lodash/throttle');
const createLogger = require('redux-logger');
const { loadState, saveState } = require('./localStorage');
const { app } = require('./reducers/');
const configureStore = () => {
  const persistedState = loadState();
  const middlewares = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }
  const store = createStore(
    app,
    persistedState,
    applyMiddleware(...middlewares)
  );
  store.subscribe(throttle(() => {
    saveState({
      screens: store.getState().screens
    });
  }, 1000));
  return store;
}
module.exports = configureStore;
