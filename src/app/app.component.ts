import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent, AddTodoComponent, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'service-examples';

  readonly todoService = inject(TodosService);

  onAddTodo(name: string): void {
    this.todoService.addTodo(name);
  }
}
