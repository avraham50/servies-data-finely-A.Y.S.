import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<User> {

  currentUser:User
  demoCurentUser:string
  constructor(public http: HttpClient) {
    super(http, "users")
  }



  getAllNameById(id:number):string{
    try {
      return this.dataSubject.value.find(us => us.id == id).name
    } catch (error) {
      console.error('getAllNameById',id);
      
    }
   
  }
  getUserNameById(id: number): string {
    return this.dataSubject.value.find(us => us.id == id).username
  }
  
}
