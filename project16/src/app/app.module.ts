import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { FormsModule } from '@angular/forms';
import { ChangeWorkersComponent } from './ui/change-workers/change-workers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }   from '@angular/common/http';
import { MyfilterPipe } from './shared/pipes/myfilter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { TextComponent } from './ui/text/text.component';
import { IdfiltPipe } from './pipes/idfilt.pipe';
import { BirthayfiltPipe } from './pipes/birthayfilt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableWorkersComponent,
    AddformWorkerComponent,
    ChangeWorkersComponent,
    MyfilterPipe,
    MainComponent,
    TextComponent,
    IdfiltPipe,
    BirthayfiltPipe
    
  ],
  imports: [
    BrowserModule,FormsModule, NgbModule,
    TextMaskModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
