import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDoItem } from '../models/todo-item.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {

  @Input() item: ToDoItem;

  @Output() delete = new EventEmitter<unknown>();

  deleteItem(): void {
    this.delete.emit();  //.next - deprecated
  }

}
