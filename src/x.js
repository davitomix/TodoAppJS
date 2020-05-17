const Todos = [
  {
    projectName: 'Project 1',
    projectBoxId: '86454873',
    projectTodos: [
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
    ]
  },
  {
    projectName: 'Project 2',
    projectBoxId: '86454873',
    projectTodos: [
      {
        titulo: '....',
        inicio: '10:10',
        terminada: false,
      }
    ]
  }
];

localStorage['Todos-Obj'] = JSON.stringify(Todos);
const db = JSON.parse(localStorage['Todos-Obj']);
