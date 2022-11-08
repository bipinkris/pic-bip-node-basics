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
  
  constructor(private calcRef:BmiCalculatorService,
    @Inject("logger") private logger:ILogger) { }

  ngOnInit(): void {
  }


  calculateBMIScore(height:number, weight:number){  
  this.logger.write("BmiCalculatorComponent:calculateBMIScore Invokes BmiCalculatorService BMI calculation");
  this.bmiScore = this.calcRef.calculateBMI(height,weight);
  }

  setCalculatorInput(data:any){
    console.log("BmiCalculatorComponent:setCalculatorInput Received Event with Height,Weight");
    this.calculateBMIScore(data.heightIp,data.weightIp);
  }

}
