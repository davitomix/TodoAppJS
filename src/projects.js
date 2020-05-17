import Dom from "./dom-utils";
import Todo from './todos';
import Storage from './storage-utils';

const Project = (() => {
  const domObj = Dom;
  const storageObj = Storage;
  let currentId = null;

  const createProject = () => {
    const todoMain = JSON.parse(localStorage['Todos-Obj']);
    const projectName = document.getElementById('project-name').value;
    domObj.clearInput('project-name');
    let idGenerator = new Date();
    idGenerator = idGenerator.getTime();
    const newProject = {
      projectName: projectName,
      projectLiId: idGenerator,
      projectDeleteBtnId: idGenerator + 1,
      projectTodos: []
    };
    setProjectId(newProject['projectLiId']);
    todoMain.push(newProject);
    storageObj.addToStorage('Todos-Obj', todoMain);
  };

  const scanProjects = () => {
    const currentStorage = JSON.parse(localStorage['Todos-Obj']);
    for(const ele in currentStorage){
      const proName = currentStorage[ele].projectName;
      const proLiId = currentStorage[ele].projectLiId;
      const proDelId = currentStorage[ele].projectDeleteBtnId;
      domObj.injectProject(proName, proLiId, proDelId);
      
      // Select Project
      const selectedProject = document.getElementById(proLiId);
      selectedProject.addEventListener('click', (e) => {
        setProjectId(proLiId);
        domObj.clearTodoForm();
        domObj.hideTodoSaveBtn();
        scanTodos(proLiId);
        domObj.showTodoForm();
        domObj.unmarkProjects();
        domObj.markProject(selectedProject.classList.contains('not-selected'), selectedProject);
      }, false, {once : true})
    }
  }

  const scanTodos = (projectId) => {
    const currentStorage = JSON.parse(localStorage['Todos-Obj']);
    const projectIndex = currentStorage.findIndex(obj => {
      return obj.projectLiId == projectId;
    });
    const currentProject = currentStorage[projectIndex];
    console.log(currentProject.projectTodos);
    domObj.clearTodos();
    if(currentProject['projectTodos'].length > 0){
      for(const elemtn in currentProject.projectTodos) {
        const taskName = currentProject.projectTodos[elemtn].name;
        const taskDescription = currentProject.projectTodos[elemtn].description;
        const taskDeadline = currentProject.projectTodos[elemtn].deadline;
        const taskPriority = currentProject.projectTodos[elemtn].priority;
        const taskBoxId = currentProject.projectTodos[elemtn].boxid;
        const taskDeleteBtnId = currentProject.projectTodos[elemtn].delid;
        const taskEditBtnId = currentProject.projectTodos[elemtn].ediid;
        const taskDoneBtnId = currentProject.projectTodos[elemtn].donid;
        domObj.injectTodo(taskName, taskDescription, taskDeadline, taskPriority, taskBoxId, taskDeleteBtnId, taskEditBtnId, taskDoneBtnId);
        const todoDeleteBtn = document.getElementById(taskDeleteBtnId);
        const todoEditBtn = document.getElementById(taskEditBtnId);
        const todoDoneBtn = document.getElementById(taskDoneBtnId);
        // Delete Todo Listener.
        todoDeleteBtn.addEventListener('click', function deleteTodo(e) {
          const todoObj = Todo;
          todoObj.removeTodo(currentProject, projectIndex, taskBoxId);
          domObj.clearTodos();
          scanTodos(getProjectId());
        }, false, {once : true});
        // Edit Todo Listener.
        /*
        if(!todoEditBtn.onclick) {
          todoEditBtn.addEventListener('click', function deleteTodo(e) {
            const todoObj = Todo;
            domObj.showTodoForm();
            domObj.showTodoSaveBtn();
            domObj.fillTodoForm(taskName, taskDescription, taskDeadline, taskPriority);
            todoObj.setEditTodoId(currentProject, label, currentProject[elemtn].boxid)
          }, false, {once : true});
        } else {
          todoEditBtn.removeEventListener('click', deleteTodo);
        }
        if(!todoDoneBtn.onclick) {
          todoDoneBtn.addEventListener('click', function deleteTodo(e) {
            const todoObj = Todo;
            todoObj.removeTodo(currentProject, label, taskBoxId);
            alert('Task Completed !');
          }, false, {once : true});
        } else {
          todoDoneBtn.removeEventListener('click', deleteTodo);
        }
        */
      }
    }
  };

  const setProjectId = (id) => {
    currentId = id;
  };

  const getProjectId = () => {
    return currentId;
  };

  return {
    createProject,
    scanProjects,
    scanTodos,
    setProjectId,
    getProjectId
  };
})();

export default Project;