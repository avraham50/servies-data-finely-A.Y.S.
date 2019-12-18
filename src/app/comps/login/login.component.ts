import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { TytleService } from '../../services/tytle.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(
    private router: Router,
    public userSrv:UsersService,
    public tytleSrv:TytleService,
    public loginSrv:LoginService,

    ) { }

  ngOnInit() {
    this.tytleSrv.tytleOfPage = 'Log-in'
  }


  openPath() {
    this.loginSrv.isLogin = true;
  }
  

  }


