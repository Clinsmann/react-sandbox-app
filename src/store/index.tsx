import { configure } from "mobx";
import TodoStore from './TodoStore';
import { createContext } from "react";

configure({ enforceActions: "always" });

export class RootStore {
  todoStore: TodoStore;
  //define more stores here

  constructor() {
    this.todoStore = new TodoStore(this);
    //instantiate more stores here
  }
}

export const RootStoreContext = createContext(new RootStore());
