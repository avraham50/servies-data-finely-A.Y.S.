import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';
import { TytleService } from '../../services/tytle.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  
  isSearch:boolean = false
  search_title_input: string
  search_body_input:string


  constructor(public postSrv:PostsService,
    public userSrv: UsersService,
    public tytleSrv:TytleService,
     ) { }

  ngOnInit() {
    this.tytleSrv.tytleOfPage = "posts"
  }
 
}
