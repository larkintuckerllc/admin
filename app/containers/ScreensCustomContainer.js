// TODO: HANDLE ERRORS PROPERLY
const React = require('react');
const find = require('lodash/find');
const { PropTypes } = React;
const Screens = require('../components/Screens');
const ScreensCustomContainer = React.createClass({
  handleChangeDescription: function(e) {
    const self = this;
    self.setState({
      description: e.target.value
    });
  },
  handleUpdateScreen: function(e) {
    e.preventDefault();
    const self = this;
    const { updateScreen, selectedScreen } = self.props;
    updateScreen(selectedScreen, self.state.description);
  },
  getInitialState: function() {
    return {
      description: ''
    };
  },
  componentWillReceiveProps: function({selectedScreen, screens}) {
    const self = this;
    if (selectedScreen !== null && selectedScreen !== self.props.selectedScreen) {
      self.setState({
        description: find(screens, o => o.id === selectedScreen).description
      });
    }
  },
  componentDidMount: function() {
    const self = this;
    self.fetchData();
  },
  render: function() {
    const self = this;
    return (
      <Screens
        {...this.props}
        description={self.state.description}
        handleChangeDescription={self.handleChangeDescription}
        handleUpdateScreen={self.handleUpdateScreen} />
    );
  },
  fetchData() {
    const self = this;
    const { fetchScreens } = self.props;
    fetchScreens();
  },
  propTypes: {
    fetchScreens: PropTypes.func.isRequired
  }
});
module.exports = ScreensCustomContainer;
