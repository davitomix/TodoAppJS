import Dom from "./dom-utils";
import Todo from './todos';

const Project = (() => {
  const domObj = Dom;
  let currentLabel = 0;

  const scanTodos = (label) => {
    const currentStorage = JSON.parse(localStorage['Todos-Obj']);
    const currentProject = currentStorage[label];
    domObj.clearTodos();
    if(currentProject.length > 0){
      for(const elemtn in currentProject) {
        const taskName = currentProject[elemtn].name;
        const taskDescription = currentProject[elemtn].description;
        const taskDeadline = currentProject[elemtn].deadline;
        const taskPriority = currentProject[elemtn].priority;
        const taskBoxId = currentProject[elemtn].boxid;
        const taskDeleteBtnId = currentProject[elemtn].delid;
        const taskEditBtnId = currentProject[elemtn].ediid;
        domObj.injectTodo(taskName, taskDescription, taskDeadline, taskPriority, taskBoxId, taskDeleteBtnId, taskEditBtnId);
        const todoDeleteBtn = document.getElementById(taskDeleteBtnId);
        const todoEditBtn = document.getElementById(taskEditBtnId);
        if(!todoDeleteBtn.onclick) {
          todoDeleteBtn.addEventListener('click', function deleteTodo(e) {
            const todoObj = Todo;
            todoObj.removeTodo(currentProject, label, taskBoxId);
          }, false, {once : true});
        } else {
          todoDeleteBtn.removeEventListener('click', deleteTodo);
        }
        if(!todoEditBtn.onclick) {
          todoEditBtn.addEventListener('click', function deleteTodo(e) {
            const todoObj = Todo;
            console.log('edit clicked');
            domObj.showTodoForm();
            domObj.showTodoSaveBtn();
            domObj.fillTodoForm(taskName, taskDescription, taskDeadline, taskPriority);
            todoObj.setEditTodoId(currentProject, label, currentProject[elemtn].boxid)
          }, false, {once : true});
        } else {
          todoEditBtn.removeEventListener('click', deleteTodo);
        }
      }
    }
  };

  const setProjectLabel = (projectLabel) => {
    currentLabel = projectLabel;
  };

  const getProjectLabel = () => {
    return currentLabel;
  };

  return {
    scanTodos,
    setProjectLabel,
    getProjectLabel
  };
})();

export default Project;