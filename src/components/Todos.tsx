import { FC, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../store';

const Todos: FC = () => {
  const { todoStore } = useContext(RootStoreContext);
  return (
    <div style={{ padding: '50px' }}>
      <h1>Get Todos App</h1>
      <button onClick={() => todoStore.loadTodos()}>Get Todos</button>
      {todoStore.todos.pending && (<h4>todos loading...</h4>)}
      {todoStore.todos.data?.map(todo => (
        <div key={todo.id} style={{ textTransform: "capitalize", padding: '5px 0' }}>{todo.title}</div>
      ))}
    </div>
  );
};

export default observer(Todos);
