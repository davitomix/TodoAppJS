import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Todo from './todos';
import Project from './projects';
import Storage from './storage-utils';
import Dom from './dom-utils';

//DOM.
const domObj = Dom;
// Storage.
const TodoMain = {};
TodoMain['default'] = [];
const storageObj = Storage;
// Projects. 
const projectForm = document.getElementById('project-form');

const run = () => {
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createProject();
  });
  console.log('running...');
};

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

  const selProject = document.getElementById(domObj.getProjectId());
  selProject.addEventListener('click', (e) => {
    e.preventDefault();
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
    const todoSubmit = document.getElementById('todo-create');
    todoSubmit.removeEventListener("click", (e) => {}, false);
    todoSubmit.addEventListener("click", (e) => {
      
    }, false);
  }, false); 

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
