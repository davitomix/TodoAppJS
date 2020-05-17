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
const storageObj = Storage;
// Projects. 
const projectObj = Project;
const projectForm = document.getElementById('project-form');
// Todos.
const todoForm = document.getElementById('todo-form');
const todoCancel = document.getElementById('todo-cancel');
const todoEdit = document.getElementById('todo-save');

const run = () => {
  console.log('running...');

  // Create Project.
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    projectObj.createProject();
    domObj.clearProjects();
    projectObj.scanProjects();
    console.log(JSON.parse(localStorage['Todos-Obj']));
  });

  // Create Todo.
  todoForm.addEventListener('submit', function _func(e) {
    e.preventDefault();
    const projectId = projectObj.getProjectId();
    todoObj.createTodo(projectId);
    projectObj.scanTodos(projectId);
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

const start = (() => {
  const result = storageObj.todoObjExists();
  const todoMain = new Array;
  storageObj.removeFromStorage('Todos-Obj');
  storageObj.addToStorage('Todos-Obj', todoMain);
  // if(!result){
  //   const TodoMain = {};
  //   //TodoMain['default'] = [];
  //   storageObj.addToStorage('Todos-Obj', TodoMain);
  // }
  // else {
  //   const actualStorage = JSON.parse(localStorage['Todos-Obj']);
  //   const storageKeys = Object.keys(actualStorage);
  //   for(const prjct in storageKeys) {
  //     domObj.injectProject(storageKeys[prjct]);
  //   }
  // }
  run();
})();
