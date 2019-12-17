import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  isUsers:boolean = false
  isSearch:boolean = false
  search_title_input: string
  search_body_input:string


  constructor(public postSrv:PostsService, public userSrv:UsersService) { 
    this.userSrv.data.subscribe(users => {
      if (users && users.length > 0) {
          this.isUsers = true        
      }
    })
  }

  ngOnInit() {
  }
  // getTodosBySearch() {
  //   this.inputSearch = document.querySelector('.input-search')
  //   this.todosList = JSON.parse(localStorage.getItem('todos'))
  //   this.todosList = this.todosList.filter(u => u.title.includes(this.inputSearch.value))
  //   console.log('search', this.inputSearch.value);

  // }
}
