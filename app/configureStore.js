const { createStore, applyMiddleware, compose } = require('redux');
const createLogger = require('redux-logger');
const promise = require('redux-promise');
const { app } = require('./reducers/');
const configureStore = () => {
  const middlewares = [promise];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }
  return createStore(
    app,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
module.exports = configureStore;
