import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TytleService {
  
  tytleOfPage:string
  constructor(public userSrv: UsersService) {
    console.warn('I used TytleService, tytleOfPage:', this.tytleOfPage);
   }
}
