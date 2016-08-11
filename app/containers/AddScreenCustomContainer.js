const React = require('react');
const { PropTypes } = React;
const AddScreen = require('../components/AddScreen');
const AddScreenCustomContainer = React.createClass({
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
    const { addScreen } = self.props;
    addScreen(self.state.id, self.state.description);
  },
  getInitialState: function() {
    return {
      id: '',
      description: ''
    };
  },
  componentWillReceiveProps: function(nextProps) {
    const self = this;
    if (nextProps.isSuccessAdding) {
      self.setState({
        id: '',
        description: ''
      });
    }
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
    addScreen: PropTypes.func.isRequired
  }
});
module.exports = AddScreenCustomContainer;
