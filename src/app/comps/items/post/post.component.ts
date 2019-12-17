import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { UsersService } from 'src/app/services/users.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'post-item',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  
  constructor(public userSrv:UsersService, public postSrv:PostsService) { }

  @Input() post:Post  
  
 
  ngOnInit() {
    console.log('post.userId=',this.post.userId);
    
  }

}
