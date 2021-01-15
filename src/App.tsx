import './App.css';
import { FC } from 'react';
import Todos from './components/Todos';

const App: FC<{}> = () => (
  <div>
    <h1>This is the application, LOL!!!</h1>
    <Todos />
  </div>
);

export default App;
