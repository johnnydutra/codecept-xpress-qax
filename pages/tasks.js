const { I } = inject();

module.exports = {
  createTask: function(taskName) {
    I.amOnPage('/');
    I.fillField('#newTask', taskName);
    I.click('Create', 'button');
  },
  hasTask: function(taskName) {
    I.see(taskName, '.task-item');
  },
  popupHasText: function(text) {
    I.see(text, '.swal2-html-container');
  }
}
