import { Input,Component } from '@angular/core';
import { MyFirstService } from './shared/services/my-first.service';
import { MyWorker,  MyWorkerType } from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyFirstService]

})
export class AppComponent {
  title = 'Список сотрудников';
  workers:MyWorker[];
  myWorkerType = MyWorkerType;
  @Input() searchStr: string;
  constructor(private MyFirstService: MyFirstService){}

  ngOnInit() {
    this.getData();
  }

  async getData(){
    try {
      this.workers = await this.MyFirstService.getWorkers();
    } catch (e){
      console.log(e)
    }
  }

  getByType(type:number){
    return this.workers.filter((worker) => worker.type === type);
  }

  async onDeleteWorker(id: number){
    try {
      await this.MyFirstService.deleteWorker(id)
    } catch (e) {
      console.error(e)
    } finally {
      await this.getData()
    }
  }
  
  async onAddWorker(worker: MyWorker){
    let id = this.workers.length>0? this.workers[this.workers.length -1].id+1:0;
    worker.id=id;

    try {
      await this.MyFirstService.postWorker(worker)
    } catch (e) {
      console.error(e);
    } finally {
      await this.getData()
    }
    
  }
  async onEditWorker(editBestWorker){
    try {
      await this.MyFirstService.putWorker(editBestWorker)
    } catch (e){
      console.error(e)
    } finally {
      await this.getData()
    }
  }
}