const Storage = (() => {
  const checkTodoObj = () => {
    const todoObj = localStorage['Todos-Obj'];
    if(todoObj === undefined) {
      return false;
    }
    else {
      return true;
    }
  };
  
  return {
    checkTodoObj
  }
})();

export default Storage;