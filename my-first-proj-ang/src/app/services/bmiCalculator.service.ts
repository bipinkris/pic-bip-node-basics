import { ConsoleLoggerService } from "./consoleLogger.service";
import {Injectable,Inject} from "@angular/core"
import { ILogger } from "./logger.contract";
import { BmiDataRepositoryService } from "src/app/services/bmi-data-repository.service";

@Injectable()
export class BmiCalculatorService{
    constructor(@Inject("logger") private logger:ILogger,private repoService:BmiDataRepositoryService){

    }
    calculateBMI(height:number, weight:number):number {
        console.log("BmiCalculatorService calculateBMI called");
        let bmiValue = height*weight;
        this.repoService.createNew({height:height, weight:weight, bmiValue:bmiValue,timestamp:Date.now()})
        return bmiValue;
    }

}