import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../store/RootState';
import { FC, useContext } from 'react';

const Todos: FC = () => {
  const rootStore = useContext(RootStoreContext);//TODO Learn
  return (
    <>
      <button onClick={() => rootStore.todoStore.loadTodos()}>Get Todos</button>
      {rootStore.todoStore.todos.pending && <h4>todos loading...</h4>}
      {rootStore.todoStore.todos.data?.map(todo => <h4 key={todo.id}>{todo.title}</h4>)}
    </>
  );
};

export default observer(Todos);
