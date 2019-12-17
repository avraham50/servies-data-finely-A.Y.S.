import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { filter } from 'minimatch';


export class BaseService<T> {




  protected dataSubject:BehaviorSubject<T[]> = new BehaviorSubject<T[]>([])
  data:Observable<T[]> = this.dataSubject.asObservable()
  
  constructor(protected http:HttpClient,protected API:string) { 
    this.API = "https://jsonplaceholder.typicode.com/"+ this.API;
    this.http.get<T[]>(this.API).subscribe(arr=> this.dataSubject.next(arr))

  }
  // searchData(select:string){
  //   this.data = JSON.parse(JSON.parse(this.data.forEach(el => filter(JSON.stringify(el.includes(select)) this.data.forEach(el => filter(el.includes(select))))  
  // }

  addNewItem(item: T) {
    let dynamicItems = localStorage[this.API] ?
      JSON.parse(localStorage[this.API]) : [];

    let apiItems = this.dataSubject.value

    dynamicItems.push(item)
    localStorage[this.API] = JSON.stringify(dynamicItems)

    apiItems.push(item)
    this.dataSubject.next(apiItems)
  }
  
}
