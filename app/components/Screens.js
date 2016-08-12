const React = require('react');
const { PropTypes } = React;
const Screens = ({
  screens,
  isFetching,
  isErrorFetching,
  selectScreen,
  selectedScreen,
  description,
  handleChangeDescription,
  handleUpdateScreen,
  isUpdating,
  isErrorUpdating
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
  return (
  <div className="panel panel-default">
    <div className="panel-heading">
      <strong>Screens</strong>
    </div>
    <ul className="list-group">
      {screens.map(screen =>
        <li onClick={
            (selectedScreen !== screen.id && !isUpdating) ?
              selectScreen.bind(null, screen.id) :
              null
          } key={screen.id} className="list-group-item">
          <h4 className="list-group-item-heading">{screen.id}</h4>
          {
            (selectedScreen === screen.id) ?
              <form onSubmit={handleUpdateScreen}>
                <div className="form-group">
                  <input disabled={isUpdating} id="description" className="form-control" type="text" placeholder="description" value={description} onChange={handleChangeDescription}/>
                </div>
                {
                  isErrorUpdating ?
                    <div className="alert alert-danger" role="alert"><strong>Failed to update.</strong></div> :
                    null
                }
                <div className="form-group">
                  <button disabled={isUpdating} type="submit" className="btn btn-default">Update</button>
                </div>
              </form> :
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
  selectedScreen: PropTypes.string,
  description: PropTypes.string.isRequired,
  handleChangeDescription: PropTypes.func.isRequired,
  handleUpdateScreen: PropTypes.func.isRequired,
  isUpdating: PropTypes.bool.isRequired,
  isErrorUpdating: PropTypes.bool.isRequired
};
module.exports = Screens;
