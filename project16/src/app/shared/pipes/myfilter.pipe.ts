import { Pipe, PipeTransform } from '@angular/core';
import {MyWorker} from "../worker.model";

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(workers: MyWorker[], searchStr: string): MyWorker[] {
    if (!searchStr){
      return workers
    } else {
      let filteredWorkers = workers.filter(worker => {
        let filterNameSur: string = worker.name + ' ' + worker.surname;
        filterNameSur = filterNameSur.toLowerCase();
        return filterNameSur.indexOf(searchStr.toLowerCase()) !== -1
      });
      return filteredWorkers
    }

}}
