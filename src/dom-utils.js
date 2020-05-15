const Dom = (() => {
  let currentId = 0;
  let btnId = 0;
  const todoForm = document.getElementById('display-form');
  const textForm = document.getElementById('display-text');

  const setProjectId = (id) => {
    currentId = id;
  };

  const getProjectId = () => {
    return currentId;
  };

  const setButtonId = (id) => {
    btnId = id;
  };

  const getButtonId = () => {
    return btnId;
  };

  const injectProject = (name) => {
    let idGenerator = new Date();
    idGenerator = idGenerator.getTime();
    const projectUl = document.getElementById('project-ul');
    const projectLi = document.createElement('li');
    projectLi.id = idGenerator;
    setProjectId(projectLi.id.toString());
    projectLi.classList = ['project-li not-selected'];
    const projectH3 = document.createElement('h3');
    projectH3.innerText = name;
    const deleteBtn = document.createElement('button');
    deleteBtn.id = idGenerator + 2;
    setButtonId(deleteBtn.id.toString());
    deleteBtn.innerHTML = 'X';
    projectLi.appendChild(projectH3);
    projectLi.appendChild(deleteBtn);
    projectUl.appendChild(projectLi);
  };

  const removeProject = (id) => {
    const project = document.getElementById(id);
    project.remove();
  };

  const injectTodo = (name, description, deadline, priority, tableId, delId) => {
    const todoContainer = document.getElementById('todo-container');
    const todoTable = document.createElement('table');
    todoTable.id = tableId;
    const tableThs = document.createElement('tr');
    const tableTds = document.createElement('tr');

    const thName = document.createElement('th');
    const thDesc = document.createElement('th');
    const thDead = document.createElement('th');
    const thPrior = document.createElement('th');
    const thEdit = document.createElement('th');
    const thDel = document.createElement('th');

    const tdName = document.createElement('td');
    const tdDesc = document.createElement('td');
    const tdDead = document.createElement('td');
    const tdPrior = document.createElement('td');
    const tdEdit = document.createElement('td');
    const tdDel = document.createElement('td');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    deleteBtn.id = delId;
    tdEdit.appendChild(editBtn);
    tdDel.appendChild(deleteBtn);

    thName.innerHTML = 'Name';
    thDesc.innerHTML = 'Description';
    thDead.innerHTML = 'Deadline';
    thPrior.innerHTML = 'Priority';
    thEdit.innerText = 'Edit';
    thDel.innerText = 'Delete';
    
    tdName.innerHTML = name;
    tdDesc.innerHTML = description;
    tdDead.innerHTML = deadline;
    tdPrior.innerHTML = priority;
    editBtn.innerHTML = 'edit';
    editBtn.className = 'edit-todo-btn'
    deleteBtn.innerHTML = 'delete';
    deleteBtn.className = 'delete-todo-btn';

    tableThs.appendChild(thName);
    tableThs.appendChild(thDesc);
    tableThs.appendChild(thDead);
    tableThs.appendChild(thPrior);
    tableThs.appendChild(thEdit);
    tableThs.appendChild(thDel);

    tableTds.appendChild(tdName);
    tableTds.appendChild(tdDesc);
    tableTds.appendChild(tdDead);
    tableTds.appendChild(tdPrior);
    tableTds.appendChild(tdEdit);
    tableTds.appendChild(tdDel);

    todoTable.appendChild(tableThs);
    todoTable.appendChild(tableTds);
    todoTable.className = 'todo-task';
    todoContainer.appendChild(todoTable);
  };

  const clearInput = (field) => {
    document.getElementById(field).value = "";
  };

  const clearTodoForm = () => {
    const taskName = document.getElementById('task-name').value = null;
    const taskDescription = document.getElementById('task-description').value = null;
    const taskDeadline = document.getElementById('task-deadline').value = null;
    const taskPriority = document.getElementById('task-priority').value = 'low';
  };

  const hideTodoForm = () => {
      textForm.classList.add('util-cont');
      textForm.classList.remove('d-none');
      todoForm.classList.remove('util-cont');
      todoForm.classList.add('d-none');
  };

  const showTodoForm = () => {
      textForm.classList.remove('util-cont');
      todoForm.classList.remove('d-none');
      todoForm.classList.add('util-cont');
      textForm.classList.add('d-none');
  };

  const unmarkProjects = () => {
    const projectsList = document.getElementById('project-ul');
    const items = projectsList.getElementsByTagName('li');
    for(let i=0; i< items.length; i++){
      if(items[i].classList.contains('selected')){
        items[i].classList.remove('selected');
        items[i].classList.add('not-selected');
      }
    }
  };

  const markProject = (value, project) => {
    if(value){
      project.classList.remove('not-selected');
      project.classList.add('selected');
    }
    else{
      project.classList.remove('selected');
      project.classList.add('not-selected');
    }
  };

  const clearTodos = () => {
    const todoContainer = document.getElementById('todo-container');
    while(todoContainer.hasChildNodes()) {
      todoContainer.removeChild(todoContainer.firstChild);
    }
  };

  return {
    getProjectId,
    getButtonId,
    injectProject,
    removeProject,
    injectTodo,
    clearInput,
    clearTodoForm,
    hideTodoForm,
    showTodoForm,
    unmarkProjects,
    markProject,
    clearTodos,
  };
})();

export default Dom;