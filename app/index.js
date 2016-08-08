require('bootstrap/dist/css/bootstrap.css');
require('./index.css');
//import React from 'react';
//import ReactDOM from 'react-dom';
// import Counter from './components/Counter';
const createStore = require('redux').createStore;
const combineReducers = require('redux').combineReducers;
// REDUCERS
const screens = require('./reducers/screens');
const flagExample = require('./reducers/flagExample');
const app = combineReducers({
  screens,
  flagExample
});
// STORE
const store = createStore(app);
window.console.log(store.getState());
// RENDER
/*
const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement = {() => store.dispatch({
        type: 'INCREMENT'
      })}
      />,
    document.getElementById('root')
  );
  window.console.log(store.getState());
};
store.subscribe(render);
render();
*/
