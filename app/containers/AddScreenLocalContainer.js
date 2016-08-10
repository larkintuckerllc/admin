// COMPONENT WITH LOCAL STATE TO MANAGE FORM
const React = require('react');
const { PropTypes } = React;
const AddScreen = require('../components/AddScreen');
const AddScreenLocalContainer = React.createClass({
  handleChangeId: function(e) {
    const self = this;
    self.setState({ id: e.target.value });
  },
  handleChangeDescription: function(e) {
    const self = this;
    self.setState({ description: e.target.value });
  },
  handleAddScreen: function(e) {
    e.preventDefault();
    const self = this;
    self.props.handleAddScreen(self.state.id, self.state.description)
    self.setState({
      id: '',
      description: ''
    });
  },
  getInitialState: function() {
    return {
      id: '',
      description: ''
    };
  },
  render: function() {
    const self = this;
    return(
      <AddScreen
        {...self.props}
        id={self.state.id}
        description={self.state.description}
        onChangeId={self.handleChangeId}
        onChangeDescription={self.handleChangeDescription}
        onAddScreen={self.handleAddScreen} />
    );
  },
  propTypes: {
    handleAddScreen: PropTypes.func.isRequired
  }
});
module.exports = AddScreenLocalContainer;
