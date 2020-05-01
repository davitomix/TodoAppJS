import './css/style.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const createp = () => {
    const element = document.getElementById('project-list').innerHTML;
    const namep = document.getElementById('new-name');
  
    var x = document.createElement("LI");
    var t = document.createTextNode(namep);
    x.appendChild(t);
    element.appendChild(x);
}


const contents = () => {
  

  
    return element;
  };
  
  document.body.appendChild(createp());

