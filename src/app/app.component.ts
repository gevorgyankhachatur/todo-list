import { Component } from '@angular/core';
import { ToDoItem } from './models/todo-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoItems: ToDoItem[] = [];

  name: string;
  date: Date;

  addItem(): void {
    this.todoItems.push({
      name: this.name,
      dueDate: this.date
    });

    this.name = this.date = undefined;
  }

  deleteItem(index: number): void {
    this.todoItems.splice(index, 1);
  }
}
