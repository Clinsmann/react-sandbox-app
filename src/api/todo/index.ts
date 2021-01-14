import request from '../request';
import { MessageResponse } from "../types";
import { CreateTodoPayload, GetTodoResponse } from "./types";

export const getTodos = async () =>
  request.get<GetTodoResponse>('/user/todo', { headers: { noToken: true } })

export const createTodo = async (todo: CreateTodoPayload) =>
  request.post<MessageResponse>('/user/todo', todo, { headers: { noToken: true } });
