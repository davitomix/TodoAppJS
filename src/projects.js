import Dom from "./dom-utils";

const Project = (() => {
  const projectForm = document.getElementById('project-form');

  const TodoProjectObj = {
    
  };

  const setNewProjectListener = () => {
    projectForm.addEventListener('submit', createProject);
  };

  const createProject = (e) => {
    e.preventDefault();
    const domMultiplexor = Dom;
    const projectName = document.getElementById('project-name').value;
    console.log(projectName);
  };

  return {
    TodoProjectObj,
    setNewProjectListener
  };
})();

export default Project;