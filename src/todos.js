import Dom from "./dom-utils";

const Todo = (() => {
  const todoForm = document.getElementById('todo-form');
  const todoCreateBtn = document.getElementById('todo-create');

  const setTodoListener = () => {
    todoForm.addEventListener('submit', createTodo);
  };

  const createTodo = (e) => {
    e.preventDefault();
    const domMultiplexor = Dom;
    const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;
    const taskDeadline = document.getElementById('task-deadline').value;
    const taskPriority = document.getElementById('task-priority').value;
    console.log('to -> injectTodo')
    domMultiplexor.injectTodo(taskName, taskDescription, taskDeadline, taskPriority);
  };

  return {
    setTodoListener
  };
})();

export default Todo;