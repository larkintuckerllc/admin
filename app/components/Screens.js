const React = require('react');
const { PropTypes } = React;
const Screens = ({ screens, isFetching, isError }) => {
  if (isFetching && screens.length === 0) {
    return (
      <div className="alert alert-info" role="alert"><strong>Loading screens...</strong></div>
    );
  }
  if (isError) {
    return (
      <div className="alert alert-danger" role="alert"><strong>Failed to load screens...</strong></div>
    );
  }
  return (
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
};
Screens.propTypes = {
  screens: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired
};
module.exports = Screens;
