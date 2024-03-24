import { Component, Input, output } from '@angular/core';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TodoFormControls } from '../constants';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss',
})
export class AddTodoComponent {
  onAddTodo = output<string>();
  readonly formGroup = this.formBuilder.group({
    name: [''],
  });
  get nameControl(): AbstractControl<string, string> | null {
    return this.formGroup.get(TodoFormControls.Name);
  }
  constructor(private readonly formBuilder: NonNullableFormBuilder) {}

  addTodo(): void {
    if (this.nameControl?.value) {
      this.onAddTodo.emit(this.nameControl.value);
      this.nameControl.reset();
    }
  }
}
