import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MyWorkerType } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.css']
})
export class EditWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  editid:number;
  editname: string;
  editsurname: string;
  type = 0;

  @Output() editWorker = new EventEmitter<object>();
  constructor() { }
  
  ngOnInit(): void {
  }
  onEditWorker() {
    let d = document.getElementById("danger");
    let pr = /\S/;
    let en = this.editname;
    let es = this.editsurname;
    if ((en.search(pr)==-1) ){
      d.innerHTML = 'Не введено имя!'
    }
    else if ((es.search(pr)==-1)){
      d.innerHTML = 'Не введена фамилия!'
    }
    else if (this.editid <0 || this.editid == null){
      d.innerHTML = 'Неверный идентификатор сотрудника!'
    }
    else {
    this.editWorker.emit({
      id: this.editid,
      name: this.editname,
      surname: this.editsurname,
      type: this.type,
    });
  }
  this.editname = '';
  this.editsurname = '';
  this.editid = null;
 }
}
