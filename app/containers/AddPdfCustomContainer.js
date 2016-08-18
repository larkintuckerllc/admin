const React = require('react');
const { PropTypes } = React;
const AddPdfFormContainer = require('./AddPdfFormContainer');
const AddPdfCustomContainer = React.createClass({
  onSubmit: function({ file }) {
    const { addPdf } = this.props;
    return addPdf(file[0]);
  },
  render: function() {
    // TODO: GET RID OF SELF USAGE THROUGHOUT PROJECT
    const self = this;
    return(
      <AddPdfFormContainer
        {...self.props}
        onSubmit={self.onSubmit} />
    );
  },
  propTypes: {
    addPdf: PropTypes.func.isRequired
  }
});
module.exports = AddPdfCustomContainer;
