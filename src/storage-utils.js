const Storage = (() => {
  const removeFromStorage = (key) => {
    localStorage.removeItem(key);
  };

  const addToStorage = (key ,item) => {
    localStorage[key] = JSON.stringify(item);
  };

  const todoObjExists = () => {
    const todoObj = localStorage['Todos-Obj'];
    let result;
    return result = todoObj === undefined ? false : true;
  };
  
  return {
    removeFromStorage, 
    addToStorage,
    todoObjExists,
  }
})();

export default Storage;