import React from 'react';
import TodoStore from './TodoStore';

type RootStateContextValue = {
  todoStore: TodoStore
}

const RootStateContext = React.createContext<RootStateContextValue>({} as RootStateContextValue);

const todoStore = new TodoStore();

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <RootStateContext.Provider value={{ todoStore }}>
      {children}
    </RootStateContext.Provider>
  )
};

export const useRootStore = () => React.useContext(RootStateContext);