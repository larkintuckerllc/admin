const React = require('react');
const { PropTypes } = React;
const AddScreenFormContainer = require('./AddScreenFormContainer');
const AddScreenCustomContainer = React.createClass({
  onSubmit: function({id, description}) {
    const self = this;
    const { addScreen } = self.props;
    return addScreen(id, description);
  },
  render: function() {
    const self = this;
    return(
      <AddScreenFormContainer
        onSubmit={self.onSubmit} />
    );
  },
  PropTypes: {
    addScreen: PropTypes.func.isRequired
  }
});
module.exports = AddScreenCustomContainer;
