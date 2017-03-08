var app = require('../src/app');

test('try to add a blank task', () => {
  expect(app().canAddTask('')).toBe('A task não pode ter o seu valor vazio');
});