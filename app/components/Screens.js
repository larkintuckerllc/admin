const React = require('react');
const { PropTypes } = React;
const Screens = ({
  screens,
  isFetching,
  isErrorFetching,
  selectScreen,
  selectedScreen
}) => {
  if (isFetching && screens.length === 0) {
    return (
      <div className="alert alert-info" role="alert"><strong>Loading screens...</strong></div>
    );
  }
  if (isErrorFetching) {
    return (
      <div className="alert alert-danger" role="alert"><strong>Failed to load screens...</strong></div>
    );
  }
  // TODO: NEED TO INCORPORATE REAL UPDATE FORM
  return (
  <div className="panel panel-default">
    <div className="panel-heading">
      <strong>Screens</strong>
    </div>
    <ul className="list-group">
      {screens.map(screen =>
        <li
          onClick={
            (selectedScreen !== screen.id) ?
              selectScreen.bind(null, screen.id) :
              null
          }
          key={screen.id} className="list-group-item">
          <h4 className="list-group-item-heading">{screen.id}</h4>
          {
            (selectedScreen === screen.id) ?
              <div>TODO: FORM</div> :
              <p className="list-group-item-text">{screen.description}</p>
          }
        </li>
      )}
    </ul>
  </div>
  );
};
Screens.propTypes = {
  screens: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isErrorFetching: PropTypes.bool.isRequired,
  selectScreen: PropTypes.func.isRequired,
  selectedScreen: PropTypes.string
};
module.exports = Screens;
