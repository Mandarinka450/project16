import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idfilt'
})
export class IdfiltPipe implements PipeTransform {

  transform(workers,sorting,direction) {

    if(sorting==='id')
    {if(direction)
    return workers.sort((a, b) => a.id - b.id)
    else return workers.sort((a, b) => b.id - a.id)}
    if(sorting==='birthday')
    
    {if(direction)
    

      return  workers.sort(function(a, b) {
          a = new Date(a.birthday);
          b = new Date(b.birthday);
          return a>b ? -1 : a<b ? 1 : 0;})
          else
          return  workers.sort(function(a, b) {
            a = new Date(a.birthday);
            b = new Date(b.birthday);
            return a>b ? 1 : a<b ? -1 : 0;})
          
          
     
  }
  }
}

