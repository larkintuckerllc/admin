const React = require('react');
const { PropTypes } = React;
const Screens = require('../components/Screens');
const ScreensCustomContainer = React.createClass({
  componentDidMount: function() {
    const self = this;
    const { fetchScreens } = self.props;
    fetchScreens();
  },
  render: function() {
    return (
      <Screens
        {...this.props} />
    );
  },
  propTypes: {
    fetchScreens: PropTypes.func.isRequired
  }
});
module.exports = ScreensCustomContainer;
