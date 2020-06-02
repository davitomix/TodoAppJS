import './css/style.css';
import Todo from './todos';
import Project from './projects';
import Storage from './storage-utils';
import Dom from './dom-utils';

// DOM.
const domObj = Dom;
const todoObj = Todo;
// Storage.
const storageObj = Storage;
// Projects.
const projectObj = Project;
const projectForm = document.getElementById('project-form');
const initProjectBtn = document.getElementById('project-init');
const projectCancel = document.getElementById('project-cancel');
// Todos.
const todoForm = document.getElementById('todo-form');
const todoCancel = document.getElementById('todo-cancel');
const todoEdit = document.getElementById('todo-save');
const initTodoBtn = document.getElementById('todo-init');

const run = () => {
  // Show Create Project Form
  initProjectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    domObj.hideProjectInitBox();
    domObj.showProjectForm();
  }, false, { once: true });

  // Create Project.
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    projectObj.createProject();
    domObj.clearProjects();
    projectObj.scanProjects();
    domObj.hideTodoInitBox();
    domObj.showTextForm();
    domObj.clearTodos();
    domObj.hideTodoForm();
    domObj.hideProjectForm();
    domObj.showProjectInitBox();
  }, false, { once: true });

  // Cancel Project.
  projectCancel.addEventListener('click', (e) => {
    e.preventDefault();
    domObj.hideProjectForm();
    domObj.showProjectInitBox();
    domObj.clearInput('project-name');
  }, false, { once: true });

  // Show Create Todo Form.
  initTodoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    domObj.showTodoForm();
    domObj.hideTodoSaveBtn();
    domObj.hideTodoInitBox();
  }, false, { once: true });

  // Create Todo.
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const projectId = projectObj.getProjectId();
    todoObj.createTodo(projectId);
    projectObj.scanTodos(projectId);
    domObj.clearTodoForm();
    domObj.hideTodoForm();
    domObj.hideTextForm();
    domObj.showTodoInitBox();
  }, false, { once: true });

  // Cancel Todo.
  todoCancel.addEventListener('click', () => {
    domObj.clearTodoForm();
    domObj.hideTodoForm();
    domObj.hideTodoSaveBtn();
    domObj.showTodoInitBox();
    domObj.hideTodoForm();
  }, false, { once: true });

  // Edit Todo.
  todoEdit.addEventListener('click', () => {
    const newName = document.getElementById('task-name').value;
    const newDescription = document.getElementById('task-description').value;
    const newDeadline = document.getElementById('task-deadline').value;
    const newPriority = document.getElementById('task-priority').value;
    todoObj.updateTodo(newName, newDescription, newDeadline, newPriority);
    domObj.hideTodoForm();
    domObj.showTextForm();
    domObj.hideTodoSaveBtn();
    domObj.clearTodoForm();
    /* eslint-disable */
    alert('Task Saved!');
    /* eslint-enable */
  }, false, { once: true });
};
/* eslint-disable */
const start = (() => {
  const result = storageObj.todoObjExists();
  if (!result) {
    const todoMain = new Array();
    /* eslint-enable */
    let idGenerator = new Date();
    idGenerator = idGenerator.getTime();
    const newProject = {
      projectName: 'default',
      projectLiId: idGenerator,
      projectDeleteBtnId: idGenerator + 1,
      projectTodos: [],
    };
    projectObj.setProjectId(newProject.projectLiId);
    todoMain.push(newProject);
    storageObj.addToStorage('Todos-Obj', todoMain);
    projectObj.scanProjects();
  } else {
    projectObj.scanProjects();
  }
  domObj.hideTodoInitBox();
  run();
})();
