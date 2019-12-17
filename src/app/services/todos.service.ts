import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {


  API = 'https://jsonplaceholder.typicode.com/todos';
  
  constructor(public http:HttpClient) { }

  

  

  getTodosByAllUsers(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(this.API)
  }
 

}
