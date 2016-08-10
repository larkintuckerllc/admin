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
  delay(2000).then(() => {
    /*
    throw new Error(500); // SERVER ERROR
    */
    return fakeDatabase.screens
  });
index.addScreen = (id, description) =>
  // TODO: VALIDATE ID EXISTS AND IS UNIQUE
  delay(2000).then(() => {
    /*
    throw new Error(500); // SERVER ERROR
    */
    throw new Error('409'); // CONFLICTING ID
    const screen = { id, description };
    fakeDatabase.screens.push(screen);
    return screen;
  });
module.exports = index;
