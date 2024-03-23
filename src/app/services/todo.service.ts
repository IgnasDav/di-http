import { Injectable } from '@angular/core';
import { Todos } from '../types';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _todos: Todos = [];
  #id: number = 0;

  get todos(): Todos {
    return this._todos;
  }

  addTodo(todoName: string): void {
    this._todos.push({
      name: todoName,
      timestamp: new Date(),
      id: this.#id,
    });
    this.#id++;
  }
}
