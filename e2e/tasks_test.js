const { faker } = require('@faker-js/faker');

Feature('tasks');

Scenario('should add a new task',  ({ I, tasksPage }) => {
  const taskName = 'Get groceries';

  I.deleteByHelper(taskName);

  tasksPage.createTask(taskName);

  tasksPage.hasTask(taskName);
});

Scenario('should not add duplicated task', ({ I, tasksPage }) => {
  const task = {
    name: 'Pay credit card bill',
    is_done: false
  };

  I.deleteByHelper(task.name);
  I.postTask(task);

  tasksPage.createTask(task.name);

  tasksPage.popupHasText('Task already exists!');
})