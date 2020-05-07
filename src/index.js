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
  const projectId = domObj.getProjectId();
  console.log(projectId);
  const currentProject = document.getElementById(projectId);
  currentProject.addEventListener('click', function(){
    selectProject(currentProject);
  }, false);
};

const selectProject = (project) => {
  project.classList.remove('not-selected');
  project.classList.add('selected');
}

const start = (() => {
  // Check if the object existes on LS
  // Todo: Add conditional statement [...]
  const result = storageObj.checkTodoObj();
  console.log(result);

  storageObj.removeFromStorage('Todos-Obj')
  storageObj.addToStorage('Todos-Obj', TodoMain);

  run();
})();
