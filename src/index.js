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

const run = () => {
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createProject();
  });
  console.log('running...');
  todoForm.addEventListener('submit', function _func(e) {
    e.preventDefault();
    const projectLabel = projectObj.getProjectLabel();
    console.log(projectLabel);
    todoObj.createTodo(projectLabel);
    projectObj.scanTodos(projectLabel);
    domObj.hideTodoForm();
    const removeTodoId = domObj.getRemoveTodoId();
    const removeTodo = document.getElementById(removeTodoId);
    removeTodo.addEventListener('click', (e) => {
      e.preventDefault();
      storageObj.removeTodoFromStorage();
      domObj.removeTodoFromDom();
    }, false,{once : true} ); 
  });
};

// Create Project.
const createProject = () => {
  const currentStorage = JSON.parse(localStorage['Todos-Obj']);
  const projectName = document.getElementById('project-name').value;
  if(currentStorage[projectName]) {
    alert('Already exists a project with this name, Choose another.');
    return;
  }
  domObj.clearInput('project-name');
  currentStorage[projectName] = [];
  storageObj.addToStorage('Todos-Obj', currentStorage);
  console.log(currentStorage);
  domObj.injectProject(projectName);

  // Select Project.
  const selProject = document.getElementById(domObj.getProjectId());
  selProject.addEventListener('click', (e) => {
    e.preventDefault();
    const labelProject = e.target.querySelector('h3').innerText;
    projectObj.scanTodos(labelProject);
    projectObj.setProjectLabel(labelProject);
    domObj.showTodoForm();
    domObj.unmarkProjects();
    domObj.markProject(selProject.classList.contains('not-selected'), selProject);
  }, false); 

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
  }, false);
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
