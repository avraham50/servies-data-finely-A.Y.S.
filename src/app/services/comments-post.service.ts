import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { CommentPost } from '../models/comment-post';

@Injectable({
  providedIn: 'root'
})
export class CommentsPostService extends BaseService<CommentPost> {

  constructor(public http:HttpClient) { 
    super(http,"comments")
  }
}
