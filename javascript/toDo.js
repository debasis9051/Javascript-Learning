const todoList = [{
  tittle: 'Wake up',
  isDone: true
  },
{tittle: 'Meditate',
  isDone: false
},
{tittle: 'smoke joint',
isDone:true},
{tittle: 'coding',
isDone:true},
{tittle: 'listening to music',
isDone:false},
{tittle: 'sleep',
isDone:true}
]

const thingsDone = todoList.filter((todo) => {
  if (todo.isDone===true) {
    console.log(todo.tittle);
  }

})
