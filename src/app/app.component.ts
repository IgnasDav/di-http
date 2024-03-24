import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TodoService } from './services/todo.service';
import { Observable, of } from 'rxjs';
import { Todos } from './types';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodosComponent,
    AddTodoComponent,
    MatToolbarModule,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'service-examples';
  todos$: Observable<Todos> = of([]);
  readonly todoService: TodoService = inject(TodoService);

  ngOnInit(): void {
    this.todoService.initTodos();
  }

  addTodo(name: string): void {
    this.todoService.addTodo(name);
  }
}
