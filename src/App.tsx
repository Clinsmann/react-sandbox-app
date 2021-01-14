import './App.css';
import { useObserver } from 'mobx-react-lite';
import { useRootStore } from './store/RootStateContext';
import { FC } from 'react';

const App: FC<{}> = () => {
  const { todoStore } = useRootStore();
  return useObserver(() => {
    <h1>This is the application, LOL!!!</h1>
    { JSON.stringify(todoStore.todos.data) }
  });
}

export default App;
