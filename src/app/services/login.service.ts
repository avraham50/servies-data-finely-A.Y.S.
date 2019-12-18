import { Injectable } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogin:boolean = false
  countClick: number = 0

  constructor(public router:Router) {
    this.router.events.subscribe(RouterEvent=>{
      if (RouterEvent instanceof NavigationEnd) {
        if (!this.router.url.includes('login')&&!this.isLogin) {

            this.router.navigateByUrl('/login')
            this.countClick++
          if (this.countClick % 2 == 0) {
            alert("Error! \n you can't get into the aplication befor you confirm log -in !")
            }
        }
      }
    })
    
   }

   
}
