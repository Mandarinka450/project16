import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model'; 
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-change-workers',
  templateUrl: './change-workers.component.html',
  styleUrls: ['./change-workers.component.css']
})
export class ChangeWorkersComponent implements OnInit {

  public mask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
  myForm2: FormGroup = new FormGroup({
    "name": new FormControl("",[Validators.required,Validators.pattern(/[А-я]/)]),
    "surname": new FormControl("", [Validators.required, Validators.pattern(/[А-я]/)]),
    "middlename": new FormControl("", [Validators.required, Validators.pattern(/[А-я]/)]),
    "type": new FormControl("", Validators.required),
    "phone": new FormControl("", Validators.required),
    "birthday": new FormControl("", Validators.required),
    "email": new FormControl("", Validators.required)

});

  myWorkerType = MyWorkerType;
  @Input() name: string;
  @Input() surname: string;
  @Input() middlename: string;
  @Input() type: number;
  @Input() id: number;
  @Input() phone: string;
  @Input() email: string;
  @Input() birthday: string;
  @Output() editWorker = new EventEmitter<object>();
  @Output() deleteWorkeredit = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }
  onEditWorker() {
    this.editWorker.emit({
      id: this.id,
      name: this.myForm2.controls["name"].value ,
      surname: this.myForm2.controls["surname"].value,
      middlename: this.myForm2.controls["middlename"].value,
      type: this.myForm2.controls["type"].value,
      phone: this.myForm2.controls["phone"].value,
      email: this.myForm2.controls["email"].value,
      birthday: this.myForm2.controls["birthday"].value,
    });
  }
  onDeleteWorker(id: number) {
    this.deleteWorkeredit.emit(this.id);
  }
}
