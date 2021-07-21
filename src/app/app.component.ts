import { Component } from '@angular/core';
import { ToDoItem } from './models/todo-item.model';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoItems: ToDoItem[] = [];

  title: string;
  date: string;
  description: string;
  status: string;

  constructor(
    private httpService: HttpService
  ) {
    this.getTasks();
  }

  addItem(): void {
    this.todoItems.push({
      created: new Date().toLocaleDateString(),
      title: this.title,
      due: this.date,
      description: this.description,
      status: this.status,
      id: this.generateNewId()
    });

    this.title = this.date = this.description = this.status = undefined;
  }

  deleteItem(index: number): void {
    this.todoItems.splice(index, 1);
  }

  private getTasks(): void {
    this.httpService.getItems().subscribe((res: ToDoItem[]): void => {
      this.todoItems = res;
    });
  }

  private generateNewId(): number {
    return Math.max(...this.todoItems.map(el => el.id)) + 1;
  }
}
