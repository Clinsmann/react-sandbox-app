export const getTodos = async () =>
  fetch('https://jsonplaceholder.typicode.com/users/1/todos').then(r => r.json());
