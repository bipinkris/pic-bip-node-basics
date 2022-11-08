import { ConsoleLoggerService } from "./consoleLogger.service";
import {Injectable,Inject} from "@angular/core"
import { ILogger } from "./logger.contract";

@Injectable()
export class BmiCalculatorService{
    constructor(@Inject("logger") private logger:ILogger){

    }
    calculateBMI(height:number, weight:number):number {
        console.log("BmiCalculatorService calculateBMI called");
        return height*weight;
    }

}