import Dom from './dom-utils';
/* eslint-disable */
import Todo from './todos';
/* eslint-enable */
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
      projectName,
      projectLiId: idGenerator,
      projectDeleteBtnId: idGenerator + 1,
      projectTodos: [],
    };
    /* eslint-disable */
    setProjectId(newProject.projectLiId);
    todoMain.push(newProject);
    storageObj.addToStorage('Todos-Obj', todoMain);
  };

  const deleteProject = (delProjectBtn) => {
    const currentStorage = JSON.parse(localStorage['Todos-Obj']);
    const projectId = delProjectBtn.parentElement.id;
    const projectIndex = currentStorage.findIndex((obj) => obj.projectLiId == projectId);
    currentStorage.splice(projectIndex, 1);
    storageObj.addToStorage('Todos-Obj', currentStorage);
    domObj.removeProject(projectId);
    domObj.clearTodos();
    domObj.clearProjects();
    scanProjects();
    /* eslint-enable */
  };
/* eslint-disable */
  const scanProjects = () => {
    const currentStorage = JSON.parse(localStorage['Todos-Obj']);
    if (currentStorage.length > 0) {
      for (const ele in currentStorage) {
        const proName = currentStorage[ele].projectName;
        const proLiId = currentStorage[ele].projectLiId;
        const proDelId = currentStorage[ele].projectDeleteBtnId;
        domObj.injectProject(proName, proLiId, proDelId);

        // Select Project.
        const selectedProject = document.getElementById(proLiId);
        selectedProject.addEventListener('click', (e) => {
          setProjectId(proLiId);
          domObj.clearTodoForm();
          domObj.showTodoInitBox();
          scanTodos(proLiId);
          domObj.hideTextForm();
          domObj.unmarkProjects();
          domObj.hideTodoForm();
          domObj.markProject(selectedProject.classList.contains('not-selected'), selectedProject);
        }, false, { once: true });

        // Delete Project.
        const delProjectBtn = document.getElementById(proDelId);
        delProjectBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          domObj.hideTodoForm();
          domObj.hideTodoInitBox();
          domObj.showTextForm();
          deleteProject(delProjectBtn);
        }, false, { once: true });
      }
    }
  };

  const scanTodos = (projectId) => {
    const currentStorage = JSON.parse(localStorage['Todos-Obj']);
    const projectIndex = currentStorage.findIndex((obj) => obj.projectLiId == projectId);
    const currentProject = currentStorage[projectIndex];
    domObj.clearTodos();
    if (currentProject.projectTodos.length > 0) {
      for (const elemtn in currentProject.projectTodos) {
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

        // Delete Todo.
        todoDeleteBtn.addEventListener('click', (e) => {
          const todoObj = Todo;
          todoObj.removeTodo(currentProject, projectIndex, taskBoxId);
          domObj.clearTodos();
          domObj.hideTodoForm();
          domObj.showTodoInitBox();
          scanTodos(getProjectId());
          alert('Tasl Deleted!');
        }, false, { once: true });

        // Edit Todo.
        todoEditBtn.addEventListener('click', (e) => {
          const todoObj = Todo;
          domObj.showTodoForm();
          domObj.showTodoSaveBtn();
          domObj.hideTextForm();
          domObj.hideTodoInitBox();
          domObj.fillTodoForm(taskName, taskDescription, taskDeadline, taskPriority);
          todoObj.setEditTodoId(currentProject, projectIndex, currentProject.projectTodos[elemtn].boxid);
        }, false, { once: true });

        // Complete Todo.
        todoDoneBtn.addEventListener('click', (e) => {
          const todoObj = Todo;
          todoObj.removeTodo(currentProject, projectIndex, taskBoxId);
          domObj.clearTodos();
          scanTodos(getProjectId());
          alert('Task Completed !');
        }, false, { once: true });
      }
    }
  };
/* eslint-disable */
  const setProjectId = (id) => {
    currentId = id;
  };

  const getProjectId = () => currentId;

  return {
    createProject,
    scanProjects,
    scanTodos,
    setProjectId,
    getProjectId,
  };
})();

export default Project;
