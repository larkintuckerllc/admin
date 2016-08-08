const React = require('react');
const { PropTypes } = React;
const AddScreen = require('../components/AddScreen');
const { addScreen } = require('../actions');
const AddScreenContainer = React.createClass({
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
    self.context.store.dispatch(
      addScreen(self.state.id, self.state.description)
    );
    self.setState({
      id: '',
      description: ''
    });
  },
  // USING LOCAL STATE TO ACCESS FORM INPUTS
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
        id={self.state.id}
        description={self.state.description}
        onChangeId={self.handleChangeId}
        onChangeDescription={self.handleChangeDescription}
        onAddScreen={self.handleAddScreen} />
    );
  },
  // ASSUMES THAT REACT-REDUX CONTINUES TO USE CONTEXT FOR STORE
  // TODO: FIX USING CONNECT
  contextTypes: {
    store: PropTypes.object.isRequired
  }
});
module.exports = AddScreenContainer;
