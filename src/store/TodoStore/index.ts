import { AxiosResponse } from 'axios';
import { observable, action } from 'mobx';
import api from '../../api'
import { Todo } from '../../api/todo/types';
// import { GetTodoResponse } from '../../api/todo/types';

export interface TodoFormState {
  data: Todo[] | null;
  error: string | null;
  pending: boolean;
  success: boolean;
}

class TodoStore {
  @observable todos: TodoFormState = {
    pending: false,
    error: null,
    success: false,
    data: null
  };

  @action
  loadNotes = async () => {
    // todoService.getTodos().then

    try {
      // yield put({ type: todos.pending });
      const res: any = api.todoService.getTodos();
      // yield put({ type: todos.fulfilled, payload: res.data.todos });
      console.log(res);
      this.todos = res;
    } catch (error) {
      const errorMessage = error.response.status === 401 ? "User not authorized" :
        (error.response.data.message.body || "Error fetching todos");
      // notify({ title: 'Error', message: errorMessage, variant: 'error' });
      // yield put({ type: todos.rejected, payload: error.response.data.message.body });
    }
  }

  @action
  addTodo = (todo: string) => {
    if (this.todos.data?.length) {
      this.todos.data.push({
        _id: "new id here",
        name: todo,
        created_at: 'date here',
        updated_at: 'date here'
      });
    }
  }

}


export default TodoStore;
