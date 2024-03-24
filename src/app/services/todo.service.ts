import { Injectable, OnDestroy, inject } from '@angular/core';
import { Todo, Todos, TodosRes } from '../types';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, map, takeUntil, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService implements OnDestroy {
  readonly todos$ = new BehaviorSubject<Todos>([]);
  private readonly destroy$ = new Subject<void>();
  private readonly client = inject(HttpClient);

  initTodos(): void {
    this.client
      .get<TodosRes>('https://dummyjson.com/todos')
      .pipe(
        map((res) => res.todos),
        tap((todos) => this.todos$.next(todos)),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  addTodo(todoName: string): void {
    this.client
      .post<Todo>('https://dummyjson.com/todos/add', {
        todo: todoName,
        completed: false,
        userId: 1,
      })
      .pipe(
        tap((todo) => this.todos$.next([...this.todos$.value, todo])),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
