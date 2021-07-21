import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoItem } from '../models/todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getItems(): Observable<ToDoItem[]> {
    return this.http.get<ToDoItem[]>('https://60f340396d44f30017788915.mockapi.io/api/v1/tasks');
  }
}
