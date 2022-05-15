import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {

    let currentYear:any =new Date().getDate();
    let CreatedYear:any= new Date(value).getDate();
    let age = currentYear - CreatedYear;
    
    return age + args[0];
    
  }

  /*transform(value: any, ): unknown {
    //console.log(value);
    let currentYear:any =new Date().getDate();
    let CreatedYear:any= new Date(value).getDate();
    let age = currentYear - CreatedYear;
    
    return age + ' days ago';
  }*/

}
