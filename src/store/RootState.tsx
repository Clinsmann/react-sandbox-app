import { configure } from "mobx";
import TodoStore from './TodoStore';
import { createContext } from "react";

configure({ enforceActions: "always" });

export class RootStore {//TODO Learn
  todoStore: TodoStore;

  constructor() {
    this.todoStore = new TodoStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
