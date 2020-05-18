const Storage = (() => {
  const removeFromStorage = (key) => {
    localStorage.removeItem(key);
  };

  const addToStorage = (key, item) => {
    localStorage[key] = JSON.stringify(item);
  };

  const todoObjExists = () => {
    const todoObj = localStorage['Todos-Obj'];
    const result = todoObj !== undefined;
    return result;
  };

  return {
    removeFromStorage,
    addToStorage,
    todoObjExists,
  };
})();

export default Storage;
