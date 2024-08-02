
async function getUsers() {
  const {users} = await fetch('https://dummyjson.com/users').then(res => res.json());
  return users;
}

async function getUsersTodos(userId) {
  const {todos} = await fetch(`https://dummyjson.com/users/${userId}/todos`).then(res => res.json());
  return todos;
}

async function renderUsers() {
  const users = await getUsers();

  for(let i = 0; i <= users.length; i++) {
    const todos = await getUsersTodos(users[i].id);
    usersList.innerHTML += `<h1> ${users[i].firstName} ${users[i].lastName} </h1> 
    <div class"usersItem"> 
    <p> Age: ${users[i].age} </p>
    <p> Gender: ${users[i].gender} </p>
    <p> email: ${users[i].email} </p>
    <p> phone: ${users[i].phone} </p> 
    <p> Address: ${users[i].address.address} </p>
    <p> City: ${users[i].address.city} </p>
    <p> State: ${users[i].address.state} </p>
    <p> Country: ${users[i].address.country} </p>
    ${todos.map( x => `<p> <strong> Todos: </strong> ${x.todo} </p>
    <p> <strong> Completed: </strong> ${x.completed} </p>`).join('')}  </div>`}
  }

renderUsers();