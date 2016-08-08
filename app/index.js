require('bootstrap/dist/css/bootstrap.css');
require('./index.css');
const Redux = require('redux');
const { createStore } = Redux;
const { combineReducers } = Redux;
const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const screens = require('./reducers/screens');
const flagExample = require('./reducers/flagExample');
const AppContainer = require('./containers/AppContainer.js');
const app = combineReducers({
  screens,
  flagExample
});
ReactDOM.render(
  <Provider store={createStore(app)}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
