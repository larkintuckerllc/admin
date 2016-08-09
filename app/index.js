require('bootstrap/dist/css/bootstrap.css');
require('./index.css');
const Redux = require('redux');
const { createStore, combineReducers } = Redux;
const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const screens = require('./reducers/screens');
const AppContainer = require('./containers/AppContainer.js');
const app = combineReducers({
  screens
});
ReactDOM.render(
  <Provider store={createStore(app)}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
