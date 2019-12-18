import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService extends BaseService<Photo> {

  

  constructor(public http: HttpClient) { 
    super(http,"photos?id=$110&id=$111&id=$112&id=$113&id=$114&id=$115&")
    
  }



  getAllNameById(id: number):number {
    try {
      return this.dataSubject.value.find(us => us.id == id).albumId
    } catch (error) {
      console.error('getAllNameById', id);

    }

  }
  getUserNameById(id: number): string {
    return this.dataSubject.value.find(us => us.id == id).url
  }

}
