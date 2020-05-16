const Todos = {
  'Project 1': [
    {
      titulo: '....',
      inicio: '10:10',
      terminada: false,
    },
    {
      titulo: '....',
      inicio: '10:10',
      terminada: false,
    },
    {
      titulo: '....',
      inicio: '10:10',
      terminada: false,
    },
  ],
  'Proyecto 2': [
    {
      titulo: '....',
      inicio: '10:10',
      terminada: false,
    },
  ],
};

// OK 
const Todos = [
  {
    projectName: 'Project 1',
    projectBoxId: '86454873',
    projectTodos: [
      {
        titulo: '....',
        inicio: '10:10',
        terminada: false,
      },
      {
        titulo: '....',
        inicio: '10:10',
        terminada: false,
      },
      {
        titulo: '....',
        inicio: '10:10',
        terminada: false,
      },
    ]
  },
  {
    projectName: 'Project 2',
    projectBoxId: '86454873',
    projectTodos: [
      {
        titulo: '....',
        inicio: '10:10',
        terminada: false,
      }
    ]
  }
];

localStorage['Todos-Obj'] = JSON.stringify(Todos);
const db = JSON.parse(localStorage['Todos-Obj']);

// Create Project.
const createProject = () => {
  const currentStorage = JSON.parse(localStorage['Todos-Obj']);
  const projectName = document.getElementById('project-name').value;
  if(currentStorage[projectName]) {
    alert('Already exists a project with this name. Please choose another.');
    domObj.clearInput('project-name');
    return;
  }
  domObj.clearInput('project-name');
  currentStorage[projectName] = [];
  storageObj.addToStorage('Todos-Obj', currentStorage);
  console.log(currentStorage);
  domObj.injectProject(projectName);

  // Select Project.
  const selProject = document.getElementById(domObj.getProjectId());
  const labelProject = selProject.querySelector('h3').innerText;
  setTimeout(() => {console.log('mini pause')}, 50);
  selProject.addEventListener('click', (e) => {
    domObj.clearTodoForm();
    domObj.hideTodoSaveBtn();
    const actualStorage = JSON.parse(localStorage['Todos-Obj']);
    console.log(actualStorage);
    projectObj.scanTodos(labelProject);
    projectObj.setProjectLabel(labelProject);
    domObj.showTodoForm();
    domObj.unmarkProjects();
    domObj.markProject(selProject.classList.contains('not-selected'), selProject);
  }, false, {once : true}); 

  // Delete Project.
  const delProjectBtn = document.getElementById(domObj.getButtonId());
  delProjectBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    domObj.hideTodoForm();
    const actualStorage = JSON.parse(localStorage['Todos-Obj']);
    const selectedProject = delProjectBtn.parentElement;
    const h3 = selectedProject.querySelector('h3').innerText;
    delete actualStorage[h3];
    storageObj.addToStorage('Todos-Obj', actualStorage);
    console.log(actualStorage);
    domObj.removeProject(selectedProject.id);
    domObj.clearTodos();
  }, false, {once : true});
};