const Dom = (() => {
  const todoUl = document.createElement('ul');
  const todoLi = document.createElement('li');

  const injectTodo = (name, description, deadline, priority) => {
    const todoContainer = document.getElementById('todo-container');
  };
  return {
    injectTodo
  };
})();

export default Dom;