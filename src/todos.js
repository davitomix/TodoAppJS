import Storage from './storage-utils';
import Dom from "./dom-utils";

const Todo = (() => {
  const createTodo = (label) => {
    const domObj = Dom;
    const storageObj = Storage;
    const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;
    const taskDeadline = document.getElementById('task-deadline').value;
    const taskPriority = document.getElementById('task-priority').value;
    const newTask = {
      name: taskName,
      description: taskDescription,
      deadline: taskDeadline,
      priority: taskPriority
    };
    const currentStorage = JSON.parse(localStorage['Todos-Obj']);
    currentStorage[label].push(newTask);
    storageObj.addToStorage('Todos-Obj', currentStorage);
    console.log(currentStorage);
  };

  return {
    createTodo
  };
})();

export default Todo;