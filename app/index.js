require('bootstrap/dist/css/bootstrap.css');
require('./index.css');
const React = require('react');
const ReactDOM = require('react-dom');
const configureStore = require('./configureStore');
const RootContainer = require('./containers/RootContainer');
const store = configureStore();
ReactDOM.render(
  <RootContainer
    store={store}/>,
  document.getElementById('root')
);
