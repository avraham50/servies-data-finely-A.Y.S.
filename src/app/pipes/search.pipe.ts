import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeSearch'
})
export class SearchPipe implements PipeTransform {

  transform(arr:{}[] , select:string, value: any):{}[] {
    if (arr && arr.length &&
       arr.length > 0 && select && value
      ) {
      console.log("pipe-search return", arr.filter(
        item => item[value].includes(select)));
      
      return arr.filter(
        item => item[value].includes(select))
    }
    else if (arr && arr.length && arr.length > 0
      && !select || !value
      ) {
      return arr
    }
    
  }

}
