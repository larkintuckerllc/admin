const React = require('react');
const { PropTypes } = React;
const Pdfs = ({
  pdfs,
  isFetching,
  isErrorFetching
}) => {
  if (isFetching && pdfs.length === 0) {
    return (
      <div className="alert alert-info" role="alert"><strong>Loading pdfs...</strong></div>
    );
  }
  if (isErrorFetching) {
    return (
      <div className="alert alert-danger" role="alert"><strong>Failed to load pdfs...</strong></div>
    );
  }
  return (
  <div className="panel panel-default">
    <div className="panel-heading">
      <strong>Pdfs</strong>
    </div>
    <ul className="list-group">
      {pdfs.map(pdf =>
        <li key={pdf.id} className="list-group-item">
          <div className="pdfs__pdf__thumbnail"
            style={{ backgroundImage: `url("${pdf.thumbnailUrl}")`}}>
            <a href={pdf.url} target="_blank"><div className="pdfs__pdf__thumbnail__zoom"></div></a>
          </div>
          <span className="pdfs__pdf__text">{pdf.id}</span>
          <div style={{ clear: 'both' }}></div>
        </li>
      )}
    </ul>
  </div>
  );
};
Pdfs.propTypes = {
  pdfs: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isErrorFetching: PropTypes.bool.isRequired
};
module.exports = Pdfs;
