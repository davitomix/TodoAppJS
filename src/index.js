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
const storageObj = Storage;
// Projects. 
const projectForm = document.getElementById('project-form');

const run = () => {
  projectForm.addEventListener('submit', createProject);
  console.log('running...');
}; 

const createProject = (e) => {
  e.preventDefault();
  const projectName = document.getElementById('project-name').value;
  domObj.clearInput('project-name');
  console.log(projectName);
  TodoMain[projectName] = [];
  storageObj.addToStorage('Todos-Obj', TodoMain);
  console.log(TodoMain);
  domObj.injectProject(projectName);
  const delProject = document.getElementById(domObj.getButtonId());
  console.log(delProject);
  delProject.addEventListener('click', function() {
    const selectedProject = delProject.parentElement;
    const h3 = selectedProject.querySelector('h3').innerText.toString();
    const currentStorage = JSON.parse(localStorage['Todos-Obj']);
    console.log(currentStorage);
    console.log(h3);
    delete currentStorage[h3];
    storageObj.addToStorage('Todos-Obj', currentStorage);
    console.log(currentStorage);
    domObj.removeProject(delProject.parentElement.id);
  }, false);
};

const listenProjectsSelection = () => {
  // This funciton should check wich project is selected and
  // Display or enable the projects addtion.
  const projectsList = document.getElementById('project-ul');
  const items = projectsList.getElementsByTagName('li');
  for(let i=0; i< items.length; i++){
    // console.log(items[i]);
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
