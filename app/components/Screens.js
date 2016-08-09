const React = require('react');
const { PropTypes } = React;
const Screens = ({ screens }) => (
  <div className="panel panel-default">
    <div className="panel-heading">
      <strong>Screens</strong>
    </div>
    <ul className="list-group">
      {screens.map(screen =>
        <li key={screen.id} className="list-group-item">
          <h4 className="list-group-item-heading">{screen.id}</h4>
          <p className="list-group-item-text">{screen.description}</p>
        </li>
      )}
    </ul>
  </div>
);
Screens.propTypes = {
  screens: PropTypes.array.isRequired
};
module.exports = Screens;
