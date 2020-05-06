import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Todo from './todos';
import Project from './projects';
import Storage from './storage-utils';

// const toDoObj = Todo;
// const projectObj = Project;
const run = () => {
  const projectObj = Project;
  projectObj.setNewProjectListener();
  console.log('running...');
};

const start = (() => {
  // Check if the object existes on LS
  // Todo: Add conditional statement [...]
  const storageObj = Storage;
  const result = storageObj.checkTodoObj();
  console.log(result);

  const todoProject = Project.TodoProjectObj;
  localStorage.removeItem('Todos-Obj');
  localStorage['Todos-Obj'] = JSON.stringify(todoProject);
  console.log(todoProject);

  run();
})();
