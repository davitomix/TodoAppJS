import Storage from './storage-utils';
import Project from './projects';

const Todo = (() => {
  let taskBoxId = 0;
  let taskDeleteBtnId = 0;
  const projectObj = Project;
  const storageObj = Storage;
  
  const createTodo = (label) => {
    let idGenerator = new Date();
    idGenerator = idGenerator.getTime();
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

  const removeTodo = (currentProject, label, taskBoxId) => {
    const currentStorage = JSON.parse(localStorage['Todos-Obj']);
    const toDoIndex = currentProject.findIndex(obj => {
      return obj.boxid == taskBoxId;
    });
    currentProject.splice(toDoIndex, 1);
    currentStorage[label] = currentProject;
    storageObj.addToStorage('Todos-Obj', currentStorage);
    projectObj.scanTodos(label);
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
    createTodo,
    removeTodo
  };
})();

export default Todo;