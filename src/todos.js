import Storage from './storage-utils';
import Project from './projects';

const Todo = (() => {
  const projectObj = Project;
  const storageObj = Storage;
  let taskBoxId = null;
  let taskDeleteBtnId = null;
  let editTodoProject = null;
  let editTodoProjectIndx = null;
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
    currentStorage[projectIndex].projectTodos.push(newTask);
    storageObj.addToStorage('Todos-Obj', currentStorage);
  };

  const removeTodo = (currentProject, projectIndex, taskBoxId) => {
    const currentStorage = JSON.parse(localStorage['Todos-Obj']);
    const toDoIndex = currentProject['projectTodos'].findIndex(obj => {
      return obj.boxid == taskBoxId;
    });
    currentProject['projectTodos'].splice(toDoIndex, 1);
    currentStorage[projectIndex]['projectTodos']= currentProject['projectTodos'];
    storageObj.addToStorage('Todos-Obj', currentStorage);
  };

  const setEditTodoId = (currentProject, projectIndx , taskBoxId) => {
    const toDoIndex = currentProject['projectTodos'].findIndex(obj => {
      return obj.boxid == taskBoxId;
    });
    editTodoProject = currentProject;
    editTodoProjectIndx = projectIndx;
    editTodoIndex = toDoIndex;
  };

  const updateTodo = (newName, newDescription, newDeadline, newPriority) => {
    editTodoProject['projectTodos'][editTodoIndex].name = newName;
    editTodoProject['projectTodos'][editTodoIndex].description = newDescription;
    editTodoProject['projectTodos'][editTodoIndex].deadline = newDeadline;
    editTodoProject['projectTodos'][editTodoIndex].priority = newPriority;
    const currentStorage = JSON.parse(localStorage['Todos-Obj']);
    currentStorage[editTodoProjectIndx] = editTodoProject;
    storageObj.addToStorage('Todos-Obj', currentStorage);
    projectObj.scanTodos(projectObj.getProjectId());
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