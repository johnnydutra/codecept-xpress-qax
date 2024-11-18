const { faker } = require('@faker-js/faker');

Feature('tasks');

Scenario('should add a new task',  ({ I }) => {
  const taskName = faker.word.words(3);

  I.amOnPage('/');
  I.fillField('#newTask', taskName);
  I.click('Create', 'button');
  I.see(taskName, '.task-item');
});
