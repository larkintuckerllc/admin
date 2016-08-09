import React from 'react';
const { PropTypes } = React;
const { Provider } = require('react-redux');
const { Router, Route , hashHistory} = require('react-router');
const AppContainer = require('./AppContainer.js');
const RootContainer = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={AppContainer} />
    </Router>
  </Provider>
);
RootContainer.propTypes = {
  store: PropTypes.object.isRequired
};
module.exports = RootContainer;
