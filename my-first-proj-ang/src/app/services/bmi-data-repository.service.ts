import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class BmiDataRepositoryService {
  
  private bmiDataHistory:any=[];
  private bmiHistoryStream = new Subject<any>();

  constructor() {
   }

   bmiHistoryObservableStream = this.bmiHistoryStream.asObservable(); //Observor . for Subscribe()

  createNew(bmiData:any){
    console.log("BmiDataRepositoryService createNew called");
    this.bmiDataHistory.push(bmiData);  //array of Bmi Data History
    this.bmiHistoryStream.next(bmiData);  //equivalent to Publish interface of Mediator
  }


}
