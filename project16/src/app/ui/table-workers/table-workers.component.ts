import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css']
})
export class TableWorkersComponent implements OnInit {
  @Input() searchStr: string;
  @Input()title:string;
  @Input()workers:MyWorker[]=[];
  @Output()deleteWorker = new EventEmitter<number>();
  @Output() editWorker =
  new EventEmitter<object>();

  
  constructor() { }

  ngOnInit(): void {
  }
  direction=0;
  sorting= 'id';
  SortID(){
  this.sorting = 'id';
 if(this.direction)
 this.direction = 0;
  else this.direction = 1;

}
SortBirthday(){
  this.sorting = 'birthday';
  if(this.direction)
  this.direction = 0
    else this.direction = 1;

}
      
  onDeleteWorker(id:number){
    this.deleteWorker.emit(id);

  }
  
  onEditWorker(worker){
    this.editWorker.emit(worker)
  }
  showForm(id){
    let form = document.getElementById(id);
    form.classList.toggle("d-none");
  }
 
}
