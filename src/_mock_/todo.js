const todos = [];

const addTask = (item) => {
  todos.push(item);
  return todos;
};

const deleteTask = (item) => {
  const newTodos = todos.filter((todo) => todo.id !== item.id);
  newTodos.forEach((todo, id) => { todo.id = id + 1; });
  return newTodos;
};

exports.addTask = addTask;
exports.deleteTask = deleteTask;



const { addTask, deleteTask } = require('../_mocks_/todo.js');

describe('We add the addtask and deleteTask functions ', () => {
  test('when the user add a task it should be not empty on newItem', () => {
    const newItem = addTask(
      {
        task: 'Add the description for test',
        id: 1,
        status: false,
      },
    );
    expect(newItem).not.toBe([]);
  });

  test('when the user add a task it should be not empty on newItem', () => {
    const newItem = addTask(
      {
        task: 'Test Task 2',
        id: 2,
        status: false,
      },
    );
    expect(newItem).not.toBe([]);
  });

  test('when the the user deletes task the task should not be avialibale', () => {
    expect(deleteTask({
      task: 'Delete the description for test',
      id: 1,
      status: false,
    })).not.toStrictEqual([]);
  });

  test('when the the user deletes task the task should not be avialibale', () => {
    expect(deleteTask({
      task: 'Delete Task 2',
      id: 1,
      status: false,
    })).toStrictEqual([]);
  });
});