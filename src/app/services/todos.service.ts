import { Injectable } from '@angular/core';
import { Todos } from '../types';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todos = [
    { id: 1, name: 'Meet John Cena', timestamp: new Date(), isFavorite: false },
    { id: 2, name: 'Meet John Cena', timestamp: new Date(), isFavorite: false },
    { id: 3, name: 'Meet John Cena', timestamp: new Date(), isFavorite: false },
  ];

  addTodo(name: string): void {
    this.todos.push({
      id: Math.random(),
      name,
      timestamp: new Date(),
    });
  }
}
