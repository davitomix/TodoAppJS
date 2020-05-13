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
  projectForm.addEventListener('submit', createProject);
  console.log('running...');
}; 

const createProject = (e) => {
  e.preventDefault();
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
  const delProjectBtn = document.getElementById(domObj.getButtonId());
  delProjectBtn.addEventListener('click', function() {
    const actualStorage = JSON.parse(localStorage['Todos-Obj']);
    const selectedProject = delProjectBtn.parentElement;
    const h3 = selectedProject.querySelector('h3').innerText.toString();
    console.log(actualStorage);
    console.log(h3);
    delete actualStorage[h3];
    storageObj.addToStorage('Todos-Obj', actualStorage);
    console.log(actualStorage);
    domObj.removeProject(delProjectBtn.parentElement.id);
  }, false, { once: true });
  listenProjectsSelection();
};

const listenProjectsSelection = () => {
  const projectsList = document.getElementById('project-ul');
  const items = projectsList.getElementsByTagName('li');
  for(let i=0; i< items.length; i++){
    console.log(items[i]);
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