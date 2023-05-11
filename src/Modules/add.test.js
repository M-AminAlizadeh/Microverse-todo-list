const add = require('./crud.js').default;

describe('Add/Delete items from to-do list', () => {
  describe('Add/Delete Tasks', () => {
    // For Adding
    test('Add one new item to the list', () => {
      document.body.innerHTML = `
      <div class="to-do-list"></div>
      <i class="return-i">
      <input id="create-task" type="text">
      <a href="#" id="clearCompleted"></a>
      `;
      add('Test', 1, false);
      add('Second Test', 2, false);
      add('third Test', 3, false);
      const list = document.querySelectorAll('.list-item');
      expect(list).toHaveLength(3);
    });
    // For Deleting
    test('Delete item from the list', () => {
      document.body.innerHTML = `
      <div class="to-do-list"></div>
      <i class="return-i">
      <input id="create-task" type="text">
      <a href="#" id="clearCompleted"></a>
      `;
      add('Test', 1, false);
      add('Second Test', 2, false);
      add('third Test', 3, false);
      document.querySelector('.del-btn').click();
      const list = document.querySelectorAll('.list-item');
      expect(list).toHaveLength(2);
    });
  });
});