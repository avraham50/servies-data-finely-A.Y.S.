import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    public userSrv:UsersService
    ) { }

  ngOnInit() {
  }


  openPath() {
    // this.logSuper.isLogin = true;
    // this.router.navigateByUrl('/avraham-Component')
  }
  isLogin: boolean = false;

  // constructor(private router: Router) {
  //   this.router.events.subscribe(eventRout => {
  //     if (eventRout instanceof NavigationEnd) {
  //       console.log("this.router.url.includes('login')", this.router.url.includes('login'));
  //       console.log('this.isLogin', this.isLogin);

  //       if (this.router.url.includes('login') == false) {
  //         if (this.isLogin == false) {
  //           this.router.navigateByUrl('/login')
  //         }

  //       }

  //     }
  //   }
  //   )
  }


