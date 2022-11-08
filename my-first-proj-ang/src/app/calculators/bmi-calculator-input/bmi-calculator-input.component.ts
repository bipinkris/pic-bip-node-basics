import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator-input',
  templateUrl: './bmi-calculator-input.component.html',
  styleUrls: ['./bmi-calculator-input.component.css']
})
export class BmiCalculatorInputComponent implements OnInit {

  height:number=0;
  weight:number=0;

  @Output()
  onInpDataChange=new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  calculateBMI() {
    console.log("BmiCalculatorInputComponent:calculateBMI Event Emit to pass Height,Weight to BmiCalculatorComponent ");
    this.onInpDataChange.emit({heightIp:this.height,weightIp:this.weight});
  }

  reset(){
    this.height = 0;
    this.weight = 0;
  }

}
