import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'photo-item',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})


export class PhotoComponent implements OnInit {

  photoList:Photo[] = []
  @Input() photo:Photo
  
  constructor() { }

  ngOnInit() {
  }

}
