const React = require('react');
const { PropTypes } = React;
const Screens = require('../components/Screens');
const ScreensCustomContainer = React.createClass({
  componentDidMount: function() {
    const self = this;
    self.fetchData();
  },
  render: function() {
    return <Screens {...this.props} />
  },
  fetchData() {
    const self = this;
    const { requestScreens, fetchScreens } = self.props;
    requestScreens();
    fetchScreens();
  },
  propTypes: {
    requestScreens: PropTypes.func.isRequired,
    fetchScreens: PropTypes.func.isRequired
  }
});
module.exports = ScreensCustomContainer;
