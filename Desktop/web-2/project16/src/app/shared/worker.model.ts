import { NodeCompatibleEventEmitter } from "rxjs/internal/observable/fromEvent";

export interface MyWorker{
    name:string;
    surname:string;
    middlename?: string;
    type:number;
    id?:number;
    phone:string;
    birthday: string;
    email: string;
}

export enum MyWorkerType{
    programmer,
    sales,
    delivery,
    lawyer

}

