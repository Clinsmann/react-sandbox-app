import api from '../../api'
import { Todo } from '../../api/todo/types';
import { RootStore } from "../RootState";
import { observable, action, makeObservable } from 'mobx';

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
  rootStore: RootStore; //TODO Learn
  @observable todos: TodoFormState = { ...storeStateInit };

  constructor(rootStore: RootStore) {
    makeObservable(this);//TODO Learn
    this.rootStore = rootStore;
  }

  @action loadTodos = async () => {
    try {
      this.todos = { ...this.todos, pending: true, data: null };
      const response: any = await api.todoService.getTodos();
      this.todos = { ...this.todos, pending: false, data: response.data };
    } catch (error) {
      console.log(error);
      const errorMessage = error.response.status === 401 ? "User not authorized" :
        (error.response.data.message.body || "Error fetching todos");
      this.todos.error = errorMessage;
    }
  }

  @action addTodo = (todo: string) => {
    if (this.todos.data?.length) {
      this.todos.data.push({
        id: 20,
        title: todo,
        completed: false,
        userID: 10
      });
    }
  }
}
