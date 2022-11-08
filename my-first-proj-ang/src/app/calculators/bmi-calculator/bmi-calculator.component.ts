import { Component, OnInit,Inject } from '@angular/core';
import { ApiLoggerService } from 'src/app/services/apiLogger.service';
import { BmiCalculatorService } from 'src/app/services/bmiCalculator.service';
import { ConsoleLoggerService } from 'src/app/services/consoleLogger.service';
import { ILogger } from 'src/app/services/logger.contract';

@Component({
  selector: 'bmi-calc',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css'],
  providers:[{provide:BmiCalculatorService,useClass:BmiCalculatorService},
    {provide:"logger",useClass:ConsoleLoggerService}]
})
export class BmiCalculatorComponent implements OnInit {

  bmiScore:number=0;
  height:number = 0;
  weight:number =0;

  constructor(private calcRef:BmiCalculatorService,
    @Inject("logger") private logger:ILogger) { }

  ngOnInit(): void {
  }


  calculateBMI(){
  //  this.bmiScore = this.height*this.weight;
  this.logger.write("BmiCalculatorComponent.calculateBMI call");
  this.bmiScore = this.calcRef.calculateBMI(this.height,this.weight);
  }

  reset(){
    this.bmiScore = 0;
    this.height = 0;
    this.weight = 0;
  }

}
