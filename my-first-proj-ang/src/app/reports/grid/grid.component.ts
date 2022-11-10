import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BmiDataRepositoryService } from 'src/app/services/bmi-data-repository.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  lineItems:any=[];

  constructor(private repoService:BmiDataRepositoryService) { 
    this.onNewHistoryEntryMade=this.onNewHistoryEntryMade.bind(this);

  }

  ngOnInit(): void {
    this.repoService.bmiHistoryObservableStream.subscribe(this.onNewHistoryEntryMade);
  }

  onNewHistoryEntryMade(data:any){
  console.log("onNewHistoryEntryMade ",data);
   this.lineItems.push(data);
  }

}
