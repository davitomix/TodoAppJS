import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Todo from './todos';
import Project from './projects';
import Storage from './storage-utils';
import Dom from './dom-utils';

//DOM.
const domObj = Dom;
const todoObj = Todo;
// Storage.
const TodoMain = {};
TodoMain['default'] = [];
const storageObj = Storage;
// Projects. 
const projectObj = Project;
const projectForm = document.getElementById('project-form');
// Todos.
const todoForm = document.getElementById('todo-form');
const todoCancel = document.getElementById('todo-cancel');
const todoEdit = document.getElementById('todo-save');

const run = () => {
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createProject();
  });
  console.log('running...');

  // Create Todo.
  todoForm.addEventListener('submit', function _func(e) {
    e.preventDefault();
    const projectLabel = projectObj.getProjectLabel();
    todoObj.createTodo(projectLabel);
    projectObj.scanTodos(projectLabel);
    domObj.clearTodoForm();
    domObj.hideTodoForm();
    domObj.unmarkProjects();
  }, false, {once : true});

  // Cancel Todo.
  todoCancel.addEventListener('click', (e) => {
    domObj.clearTodoForm();
    domObj.hideTodoForm();
    domObj.unmarkProjects();
    domObj.hideTodoSaveBtn();
  }, false, {once : true});

  // Edit Todo.
  todoEdit.addEventListener('click', (e) => {
    console.log('saved todo');
    const newName = document.getElementById('task-name').value;
    const newDescription = document.getElementById('task-description').value;
    const newDeadline = document.getElementById('task-deadline').value;
    const newPriority = document.getElementById('task-priority').value;
    todoObj.updateTodo(newName, newDescription, newDeadline, newPriority);
    domObj.hideTodoForm();
    domObj.hideTodoSaveBtn();
    domObj.clearTodoForm();
  }, false, {once : true})
};

// Create Project.
const createProject = () => {
  const currentStorage = JSON.parse(localStorage['Todos-Obj']);
  const projectName = document.getElementById('project-name').value;
  if(currentStorage[projectName]) {
    alert('Already exists a project with this name. Please choose another.');
    domObj.clearInput('project-name');
    return;
  }
  domObj.clearInput('project-name');
  currentStorage[projectName] = [];
  storageObj.addToStorage('Todos-Obj', currentStorage);
  console.log(currentStorage);
  domObj.injectProject(projectName);

  // Select Project.
  const selProject = document.getElementById(domObj.getProjectId());
  setTimeout(() => {console.log('mini pause')}, 50);
  selProject.addEventListener('click', (e) => {
    domObj.clearTodoForm();
    domObj.hideTodoSaveBtn();
    const actualStorage = JSON.parse(localStorage['Todos-Obj']);
    console.log(actualStorage);
    const labelProject = e.target.querySelector('h3').innerText;
    projectObj.scanTodos(labelProject);
    projectObj.setProjectLabel(labelProject);
    domObj.showTodoForm();
    domObj.unmarkProjects();
    domObj.markProject(selProject.classList.contains('not-selected'), selProject);
  }, false, {once : true}); 

  // Delete Project.
  const delProjectBtn = document.getElementById(domObj.getButtonId());
  delProjectBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    domObj.hideTodoForm();
    const actualStorage = JSON.parse(localStorage['Todos-Obj']);
    const selectedProject = delProjectBtn.parentElement;
    const h3 = selectedProject.querySelector('h3').innerText;
    delete actualStorage[h3];
    storageObj.addToStorage('Todos-Obj', actualStorage);
    console.log(actualStorage);
    domObj.removeProject(selectedProject.id);
    domObj.clearTodos();
  }, false, {once : true});
};

const start = (() => {
  // Check if the object existes on LS
  // Todo: Add conditional statement [...]
  const result = storageObj.checkTodoObj();
  console.log(result);

  storageObj.removeFromStorage('Todos-Obj')
  storageObj.addToStorage('Todos-Obj', TodoMain);

  run();
})();
