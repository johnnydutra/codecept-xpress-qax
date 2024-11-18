Feature('tasks');

const tasks = new DataTable(['name']);

tasks.add(['Get groceries']);
tasks.add(['Study JavaScript']);
tasks.add(['Read a Node.js book']);

Data(tasks).Scenario('should add a new task',  ({ I, tasksPage, current }) => {
  const taskName = current.name;

  I.deleteByHelper(taskName);

  tasksPage.createTask(taskName);

  tasksPage.hasTask(taskName);
}).tag('critical').tag('smoke');

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