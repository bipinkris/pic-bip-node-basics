import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator-result',
  templateUrl: './bmi-calculator-result.component.html',
  styleUrls: ['./bmi-calculator-result.component.css']
})
export class BmiCalculatorResultComponent implements OnInit {

  @Input()
  bmiValueToDisplay:number =0;

  constructor() {
   }

  ngOnInit(): void {
  }

}
