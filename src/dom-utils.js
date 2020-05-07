const Dom = (() => {
  let currentId = 0;

  const setProjectId = (id) => {
    currentId = id;
  };

  const getProjectId = () => {
    return currentId;
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
    projectLi.appendChild(projectH3);
    projectUl.appendChild(projectLi);
  };

  const injectTodo = (name, description, deadline, priority) => {
    const todoContainer = document.getElementById('todo-container');
    const todoTable = document.createElement('table');
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

  return {
    getProjectId,
    injectProject,
    injectTodo,
    clearInput
  };
})();

export default Dom;