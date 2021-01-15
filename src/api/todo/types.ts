import { Message } from "../types";

export interface Todo {
  id: number;
  title: string;
  userID: number;
  completed: boolean;
}

export interface CreateTodoPayload {
  name: string;
}

export interface CreateTodoResponse {
  message: Message
}

export interface GetTodoResponse {
  todos: Todo[];
}
