const { createStore, applyMiddleware, compose } = require('redux');
const promise = require('redux-promise');
const thunk = require('redux-thunk').default;
const { app } = require('./reducers/');
const configureStore = () => {
  const middlewares = [thunk, promise];
  return createStore(
    app,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
module.exports = configureStore;
