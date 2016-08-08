const React = require('react');
const { PropTypes } = require('react');
const Screens = ({screens}) => {
  window.console.log(screens);
  return(
    <p>Screens</p>
  );
};
Screens.propTypes = {
  screens: PropTypes.array.isRequired
};
module.exports = Screens;
