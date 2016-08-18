const React = require('react');
const { PropTypes } = React;
const Pdfs = require('../components/Pdfs');
const PdfsCustomContainer = React.createClass({
  componentDidMount: function() {
    const self = this;
    const { fetchPdfs } = self.props;
    fetchPdfs();
  },
  render: function() {
    return (
      <Pdfs
        {...this.props} />
    );
  },
  propTypes: {
    fetchPdfs: PropTypes.func.isRequired
  }
});
module.exports = PdfsCustomContainer;
