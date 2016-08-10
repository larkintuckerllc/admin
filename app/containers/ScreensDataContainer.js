const React = require('react');
const { PropTypes } = React;
const Screens = require('../components/Screens');
const ScreensDataContainer = React.createClass({
  componentDidMount: function() {
    const self = this;
    self.fetchData();
  },
  render: function() {
    return <Screens {...this.props} />
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
module.exports = ScreensDataContainer;
