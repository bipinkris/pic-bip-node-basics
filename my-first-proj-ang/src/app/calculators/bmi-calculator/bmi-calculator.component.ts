import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bmi-calc',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {

  bmiScore:number=0;
  height:number = 0;
  weight:number =0;

  constructor() { }

  ngOnInit(): void {
  }


  calculateBMI(){
    this.bmiScore = this.height*this.weight;
  }

  reset(){
    this.bmiScore = 0;
    this.height = 0;
    this.weight = 0;
  }

}
