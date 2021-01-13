import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MyWorkerType,MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  public mask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
  myForm1: FormGroup = new FormGroup({
    "name": new FormControl("",[Validators.required,Validators.pattern(/[А-я]/)]),
    "surname": new FormControl("", [Validators.required, Validators.pattern(/[А-я]/)]),
    "middlename": new FormControl("", [Validators.required, Validators.pattern(/[А-я]/)]),
    "type": new FormControl("", Validators.required),
    "phone": new FormControl("", Validators.required),
    "birthday": new FormControl("", Validators.required),
    "email": new FormControl("", Validators.required)

});
 @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() { }

  ngOnInit(): void {}

  onAddWorker(){
    this.addWorker.emit({
      name: this. myForm1.controls["name"].value,
      surname: this. myForm1.controls["surname"].value,
      middlename: this. myForm1.controls["middlename"].value,
      type: this. myForm1.controls["type"].value,
      phone: this. myForm1.controls["phone"].value,
      email: this. myForm1.controls["email"].value,
      birthday: this. myForm1.controls["birthday"].value
    });
  }
}
