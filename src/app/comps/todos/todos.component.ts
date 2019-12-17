import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/models/todo';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {


  
  todosList: Todo[] = []
  todosListFromUser: Todo[] = []
  isAll = true
  usersId:number
  inputSearch:HTMLInputElement
  constructor(public todoSrv:TodosService,
    public userSrv:UsersService
    ) { }

  ngOnInit() {
    
    if (!localStorage.getItem('todos')){
    this.todoSrv.getTodosByAllUsers()
    .subscribe(d => {
      this.todosList = d as Todo[];
      localStorage
        .setItem('todos', JSON.stringify(d));
      console.log('myStorage', localStorage);
    })
    } else {
        if (this.todosList && this.userSrv.currentUser) {
          if (this.isAll)
            this.todosList = JSON.parse(localStorage.getItem('todos'))
          else
            this.todosList = this.todosList.filter(u => u.id == this.usersId)
        }
  
  
      }
    }
  getTodosByUserIds(id: number) {
    this.todosList = this.todosList.filter(u => u.userId == this.usersId)
    this.isAll =false
    this.usersId = id
  }
  getAllTodos() {
    this.todosList = JSON.parse(localStorage.getItem('todos'))
    this.isAll = true
  }
  getTodosBySearch() {
    this.inputSearch = document.querySelector('.input-search')
    this.todosList = JSON.parse(localStorage.getItem('todos'))
    this.todosList = this.todosList.filter(u => u.title.includes(this.inputSearch.value))
   console.log('search',this.inputSearch.value);
   
  }
}