import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends BaseService<Post>{

  constructor(public http:HttpClient) {
    super(http, "posts")
  }
}
