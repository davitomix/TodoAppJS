import Storage from './storage-utils';
import Project from './projects';

const Todo = (() => {
  let taskBoxId = 0;
  let taskDeleteBtnId = 0;
  const projectObj = Project;
  const storageObj = Storage;
  let editTodoProject = null;
  let editTodoLabel = null;
  let editTodoIndex = null;

  const createTodo = (projectId) => {
    let idGenerator = new Date();
    idGenerator = idGenerator.getTime();
    const taskBoxId = idGenerator;
    const taskDeleteBtnId = idGenerator + 1;
    const taskEditBtnId = idGenerator + 2;
    const taskDoneBtnId = idGenerator + 3;
    const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;
    const taskDeadline = document.getElementById('task-deadline').value;
    const taskPriority = document.getElementById('task-priority').value;
    const newTask = {
      boxid: taskBoxId,
      delid: taskDeleteBtnId,
      ediid: taskEditBtnId,
      donid: taskDoneBtnId,
      name: taskName,
      description: taskDescription,
      deadline: taskDeadline,
      priority: taskPriority,
    };
    const currentStorage = JSON.parse(localStorage['Todos-Obj']);
    const projectIndex = currentStorage.findIndex(obj => {
      return obj.projectLiId == projectId;
    });
    console.log(projectIndex)
    currentStorage[projectIndex].projectTodos.push(newTask);
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

  const setEditTodoId = (currentProject, label ,id) => {
    const toDoIndex = currentProject.findIndex(obj => {
      return obj.boxid == id;
    });
    editTodoProject = currentProject;
    editTodoLabel = label;
    editTodoIndex = toDoIndex;
  };

  const updateTodo = (newName, newDescription, newDeadline, newPriority) => {
    editTodoProject[editTodoIndex].name = newName;
    editTodoProject[editTodoIndex].description = newDescription;
    editTodoProject[editTodoIndex].deadline = newDeadline;
    editTodoProject[editTodoIndex].priority = newPriority;
    const currentStorage = JSON.parse(localStorage['Todos-Obj']);
    currentStorage[editTodoLabel] = editTodoProject;
    storageObj.addToStorage('Todos-Obj', currentStorage);
    projectObj.scanTodos(editTodoLabel);
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
    removeTodo,
    setEditTodoId,
    updateTodo
  };
})();

export default Todo;