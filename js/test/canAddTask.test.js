const canAddTask = require('../src/app');

test('try to add a blank task', () => {
  expect(canAddTask('')).toBe('A task não pode ter o seu valor vazio');
});