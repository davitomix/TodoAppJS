const Storage = (() => {
  const removeFromStorage = (key) => {
    localStorage.removeItem(key);
  };

  const addToStorage = (key ,item) => {
    localStorage[key] = JSON.stringify(item);
  };

  const checkTodoObj = () => {
    const todoObj = localStorage['Todos-Obj'];
    if(todoObj === undefined) {
      return false;
    }
    else {
      return true;
    }
  };

  const getProjectFromStorage = () => {

  };
  
  return {
    removeFromStorage, 
    addToStorage,
    checkTodoObj,
  }
})();

export default Storage;