import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'comment-posts',
  templateUrl: './comment-posts.component.html',
  styleUrls: ['./comment-posts.component.css']
})
export class CommentPostsComponent implements OnInit {

  constructor(public userSrv:UsersService,
    public bg:FormBuilder
    ) { }

  ngOnInit() {
    console.log('comment-posts');
    
  }

  newUserForm = this.bg.group({
    id: this.bg.control(''),
    name: this.bg.control(''),
    username: this.bg.control(''),
    email: this.bg.control(''),
  })

  newUserForm_onSubmit() {
    let newUser:User = this.newUserForm.value
    console.log('newUserForm value', newUser);
    this.userSrv.addNewItem(newUser)
  }
}
