const find = require('lodash/find');
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
    throw new Error('500'); // SERVER ERROR
    */
    return fakeDatabase.screens
  });
index.addScreen = (id, description) =>
  delay(2000).then(() => {
    /*
    throw new Error('500'); // SERVER ERROR
    */
    if (find(fakeDatabase.screens, { id }) !== undefined) {
      throw new Error('409'); // CONFLICTING ID
    }
    const screen = { id, description };
    fakeDatabase.screens.push(screen);
    return screen;
  });
index.updateScreen = (id, description) =>
  delay(2000).then(() => {
    /*
    throw new Error('500'); // SERVER ERROR
    */
    const screen = find(fakeDatabase.screens, { id });
    screen.description = description;
    return screen;
  });
index.fetchPdfs = () => new Promise((resolve, reject) => {
  const xmlhttp = new window.XMLHttpRequest();
  xmlhttp.open('GET', 'http://localhost:3000/api/pdfs', true);
  xmlhttp.setRequestHeader('Content-type', 'application/json');
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState !== 4) return;
    if (xmlhttp.status !== 200) reject('500');
    try {
      resolve(JSON.parse(xmlhttp.responseText));
    } catch (err) {
      reject('500');
    }
  }
  xmlhttp.send(JSON.stringify({}));
});
index.addPdf = (file) => new Promise((resolve, reject) => {
  const formData = new window.FormData();
  const xmlhttp = new window.XMLHttpRequest();
  formData.append('file', file);
  xmlhttp.open('POST', 'http://localhost:3000/api/pdfs', true);
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState !== 4) return;
    if (xmlhttp.status !== 200) reject('500');
    try {
      resolve(JSON.parse(xmlhttp.responseText));
    } catch (err) {
      reject('500');
    }
  };
  xmlhttp.send(formData);
});
module.exports = index;
