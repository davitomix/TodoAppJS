const Dom = (() => {
  const name = document.getElementById('task-name').value;
  const description = document.getElementById('task-description');

  const verifyFields = () => {
    
  };

  return {
    name,
    description
  }

})();

export default Dom;