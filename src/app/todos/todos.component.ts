import { Component, Input, inject, input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { TodoComponent } from './todo/todo.component';
import { Todos } from '../types';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [MatListModule, MatCardModule, TodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
  todos = input<Todos | null>();
}
