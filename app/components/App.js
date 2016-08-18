const React = require('react');
const ScreensContainer = require('../containers/ScreensContainer');
const AddScreenContainer = require('../containers/AddScreenContainer');
const PdfsContainer = require('../containers/PdfsContainer');
const AddPdfContainer = require('../containers/AddPdfContainer');
const App = () => (
  <div>
    <ScreensContainer />
    <AddScreenContainer />
    <PdfsContainer />
    <AddPdfContainer />
  </div>
);
module.exports = App;
