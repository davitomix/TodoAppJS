import Dom from "./dom-utils";

const Project = (() => {
  const domMultiplexor = Dom;

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
        domMultiplexor.injectTodo(taskName, taskDescription, taskDeadline, taskPriority);
      }
    }
  };

  return {
    scanTodos
  };
})();

export default Project;