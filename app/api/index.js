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
  delay(500).then(() => {
    if (Math.random() > 0.5) {
      throw new Error(500);
    }
    return fakeDatabase.screens
  });
module.exports = index;
