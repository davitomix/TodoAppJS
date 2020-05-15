import Dom from "./dom-utils";

const Project = (() => {
  const domMultiplexor = Dom;
  let currentLabel = 0;

  const scanTodos = (label) => {
    const currentStorage = JSON.parse(localStorage['Todos-Obj']);
    const currentProject = currentStorage[label];
    domMultiplexor.clearTodos();
    if(currentProject.length > 0){
      for(const elemtn in currentProject) {
        const taskName = currentProject[elemtn].name;
        const taskDescription = currentProject[elemtn].description;
        const taskDeadline = currentProject[elemtn].deadline;
        const taskPriority = currentProject[elemtn].priority;
        const taskBoxId = currentProject[elemtn].boxid;
        const taskDeleteBtnId = currentProject[elemtn].delid;
        domMultiplexor.injectTodo(taskName, taskDescription, taskDeadline, taskPriority, taskBoxId, taskDeleteBtnId);
        const todoBox = document.getElementById(taskBoxId);
        if(!todoBox.onclick){
          todoBox.addEventListener('click', function deleteTodo(e) {
            console.log('ok');
          }, false, {once : true})
        } else{
          todoBox.removeEventListener('click', deleteTodo);
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