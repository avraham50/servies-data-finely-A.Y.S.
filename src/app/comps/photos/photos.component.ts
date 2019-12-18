import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { PhotosService } from 'src/app/services/photos.service';
import { TytleService } from '../../services/tytle.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(public userSrv:UsersService,
    public photoSrv:PhotosService,
    public tytleSrv: TytleService
    ) { }

  ngOnInit() {
    this.tytleSrv.tytleOfPage = 'Album'
    console.log(this.photoSrv);
    
  }

}
