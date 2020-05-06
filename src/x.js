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

localStorage['Todos-Obj'] = JSON.stringify(Todos);
const db = JSON.parse(localStorage['Todos-Obj']);