import Dom from "./dom-utils";

const Project = (() => {
  const defaultProject = document.getElementById('pjct-default');

  const selectProjectListener = () => {
    defaultProject.addEventListener('click', selectProject)
  };

  const selectProject = (e) => {
    e.preventDefault();
    defaultProject.classList.remove('not-selected');
    defaultProject.classList.add('selected');
  };

  return {
    selectProjectListener
  };
})();

export default Project;