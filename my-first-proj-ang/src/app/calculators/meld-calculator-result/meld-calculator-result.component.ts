import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-meld-calculator-result',
  templateUrl: './meld-calculator-result.component.html',
  styleUrls: ['./meld-calculator-result.component.css']
})
export class MeldCalculatorResultComponent implements OnInit {

  @Input()
  meldDisplayValue:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
