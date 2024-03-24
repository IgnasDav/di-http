export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export type Todos = Todo[];

export interface TodosRes {
  todos: Todos;
  limit: number;
  skip: number;
  total: number;
}
