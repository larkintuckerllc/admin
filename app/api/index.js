const index = {}
const fakeDatabase = {
  screens: [{
    id: 'gcat',
    description: 'grumpy cat'
  }, {
    id: 'sdog',
    description: 'super dog'
  }]
}
const delay = (ms) =>
  new Promise(resolve => window.setTimeout(resolve, ms));
index.fetchScreens = () =>
  delay(500).then(() => fakeDatabase.screens);
module.exports = index;
