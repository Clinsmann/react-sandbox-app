import api from '../../api'
import { Todo } from '../../api/todo/types';
import { RootStore } from "../RootState";
import { observable, action, makeObservable, runInAction } from 'mobx';

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
      this.todos.pending = true;
      runInAction(() => { this.todos.pending = true; })
      const response: any = await api.todoService.getTodos();
      this.updateTodosData(response.data);
      // this.todos.pending = false;

      runInAction(() => { this.todos.pending = false; })
    } catch (error) {
      console.log(error);
      const errorMessage = error.response.status === 401 ? "User not authorized" :
        (error.response.data.message.body || "Error fetching todos");
      this.todos.error = errorMessage;
    }
  }

  @action updateTodosPending = (state: boolean) => {
    this.todos.pending = state
  }

  @action updateTodosData = (todos: Todo[]) => {
    this.todos.data = todos
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
