import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { TytleService } from '../../services/tytle.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  

  constructor(public userSrv:UsersService,
    public tytleSrv: TytleService,
    public loginSrv:LoginService
    ) { }

  ngOnInit() {
  }


  
}
