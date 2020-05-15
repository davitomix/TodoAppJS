import Storage from './storage-utils';

const Todo = (() => {
  let taskBoxId = 0;
  let taskDeleteBtnId = 0;

  const createTodo = (label) => {
    let idGenerator = new Date();
    idGenerator = idGenerator.getTime();
    const storageObj = Storage;
    const taskBoxId = idGenerator;
    const taskDeleteBtnId = idGenerator + 2;
    const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;
    const taskDeadline = document.getElementById('task-deadline').value;
    const taskPriority = document.getElementById('task-priority').value;
    const newTask = {
      boxid: taskBoxId,
      delid: taskDeleteBtnId,
      name: taskName,
      description: taskDescription,
      deadline: taskDeadline,
      priority: taskPriority,
    };
    const currentStorage = JSON.parse(localStorage['Todos-Obj']);
    currentStorage[label].push(newTask);
    storageObj.addToStorage('Todos-Obj', currentStorage);
    console.log(currentStorage);
  };

  const setBoxId = (id) => {
    taskBoxId = id;
  };

  const getBoxId = () => {
    return taskBoxId;
  };

  const setDeleteBtnId = (id) => {
    taskDeleteBtnId = id;
  };

  const getDeleteBtnId = () => {
    return taskDeleteBtnId;
  };

  return {
    createTodo
  };
})();

export default Todo;