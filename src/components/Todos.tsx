import { FC, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../store';

const Todos: FC = () => {
  const { todoStore } = useContext(RootStoreContext);
  return (
    <div style={{ padding: '50px' }}>
      <h1>This is the application, LOL!!!</h1>
      <button onClick={() => todoStore.loadTodos()}>Get Todos</button>
      {todoStore.todos.pending && (<h4>todos loading...</h4>)}
      {todoStore.todos.data?.map(todo => (
        <h3
          key={todo.id}
          style={{ fontWeight: 'normal', textTransform: "capitalize" }}>
          {todo.title}
        </h3>
      ))}
    </div>
  );
};

export default observer(Todos);
