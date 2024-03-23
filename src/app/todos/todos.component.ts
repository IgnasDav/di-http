import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TodoService } from '../services/todo.service';
import { MatCardModule } from '@angular/material/card';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [MatListModule, MatCardModule, TodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
  // providers: [TodoService],
})
export class TodosComponent {
  @Input() service!: TodoService;
  todoService!: TodoService;
  constructor() {
    this.todoService = new TodoService();
  }
}
