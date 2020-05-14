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
let counterProjSelector = 0;

const run = () => {
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createProject();
  });
  console.log('running...');
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
    projectObj.scanTodos(e.target.querySelector('h3').innerText);
    domObj.showTodoForm();
    unSelectProjects();
    if (selProject.classList.contains('not-selected') ){
      selProject.classList.remove('not-selected');
      selProject.classList.add('selected');
    }
    else {
      selProject.classList.remove('selected');
      selProject.classList.add('not-selected');
    }
    const projectLabel = e.target.querySelector('h3').innerText.toString();
    const todoForm = document.getElementById('todo-form');
    counterProjSelector++;
    if(counterProjSelector == 1) {
      todoForm.addEventListener('submit', function _func(e) {
        e.preventDefault();
        console.log(projectLabel);
        todoObj.createTodo(projectLabel);
        todoForm.removeEventListener('submit', _func);
        counterProjSelector = 0;
        domObj.hideTodoForm();
      });
    }
  }, false); 

  // Delete Project.
  const delProjectBtn = document.getElementById(domObj.getButtonId());
  delProjectBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    domObj.hideTodoForm();
    const actualStorage = JSON.parse(localStorage['Todos-Obj']);
    const selectedProject = delProjectBtn.parentElement;
    const h3 = selectedProject.querySelector('h3').innerText.toString();
    delete actualStorage[h3];
    storageObj.addToStorage('Todos-Obj', actualStorage);
    console.log(actualStorage);
    domObj.removeProject(delProjectBtn.parentElement.id);
  }, false);
};

const unSelectProjects = () => {
  const projectsList = document.getElementById('project-ul');
  const items = projectsList.getElementsByTagName('li');
  for(let i=0; i< items.length; i++){
    if(items[i].classList.contains('selected')){
      items[i].classList.remove('selected');
      items[i].classList.add('not-selected');
    }
  }
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
