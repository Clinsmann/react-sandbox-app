import { RootStore } from "../index";
import { getTodos } from '../../api';
import { observable, action, makeObservable } from 'mobx';

export interface Todo {
  id: number;
  title: string;
  userID: number;
  completed: boolean;
}

export interface StoreStateInit {
  error: string | null;
  pending: boolean;
  success: boolean;
}

export interface TodoFormState extends StoreStateInit {
  data: Todo[] | null;
}

const storeStateInit = {
  pending: false,
  error: null,
  success: false,
  data: null
}

export default class TodoStore {
  rootStore: RootStore;
  @observable todos: TodoFormState = { ...storeStateInit };

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @action loadTodos = async () => {
    try {
      this.setTodosPending(true);
      this.setTodosData(await getTodos());
      this.setTodosPending(false);
    } catch (error) {
      console.log({ error });
      this.setTodosError("Error fetching todos");
    }
  }

  @action setTodosPending = (state: boolean) => {
    this.todos.pending = state;
  }

  @action setTodosError = (state: string) => {
    this.todos.error = state;
  }

  @action setTodosData = (todos: Todo[]) => {
    this.todos.data = todos;
  }
}
