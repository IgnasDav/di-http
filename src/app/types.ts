export interface Todo {
  id: number;
  name: string;
  timestamp: Date;
  isFavorite?: boolean;
}

export type Todos = Todo[];
