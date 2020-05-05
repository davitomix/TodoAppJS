import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Todo from './todos';
import Project from './projects';


const toDoObj = Todo;
const projectObj = Project;

toDoObj.setTodoListener();
projectObj.selectProjectListener();