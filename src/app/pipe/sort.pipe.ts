import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let arrObjects = value;
    let column = args;

    return arrObjects.sort((a, b) => {
      if(column.indexOf(".") > 0) {
        let column1 = column.substr(0,column.indexOf("."));
        let column2 = column.substr(column.indexOf(".")+1);
        let result = 0;
        if(a[column1][column2] > b[column1][column2]) 
          result = 1;
        else if(a[column1][column2] < b[column1][column2]) 
          result = -1;
        return result;        
      } else {
      let result = 0;
      if(a[column] > b[column]) 
        result = 1;
      else if(a[column] < b[column]) 
        result = -1;
      return result;
      }
    });
  }

}