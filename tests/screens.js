const expect = require('expect');
const deepFreeze = require('deep-freeze');
const screens = require('../app/reducers/screens');
const testAddScreen = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_SCREEN',
    id: 'gcat',
    description: 'Grumpy Cat'
  };
  const stateAfter = [
    {
      id: 'gcat',
      description: 'Grumpy Cat'
    }
  ];
  deepFreeze(stateBefore);
  deepFreeze(action);
  expect(
    screens(stateBefore, action)
  ).toEqual(stateAfter);
}
module.exports = testAddScreen;
