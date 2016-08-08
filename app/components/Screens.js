const React = require('react');
const { PropTypes } = React;
const Screens = ({ screens }) => (
  <ul>
    {screens.map(screen =>
      <li key={screen.id}>{screen.id} {screen.description}</li>
    )}
  </ul>
);
Screens.propTypes = {
  screens: PropTypes.array.isRequired
};
module.exports = Screens;
