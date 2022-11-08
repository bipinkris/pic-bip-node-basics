import { Component,ViewChild } from "@angular/core";
import { MeldCalculatorService } from "src/app/services/meldCalculator.service";

//Logic
@Component({
    templateUrl:'./meldCalculator.component.html',
    selector:'meld-calc',
    providers:[{provide:MeldCalculatorService, useClass:MeldCalculatorService}]
})

export class MeldCalculatorComponent{

    meldScore:number=0;
    constructor(private meldCalculatorService:MeldCalculatorService){
    }
  //  @ViewChild("creatinine_editBox")
    //textBoxReference_creatinine:any;

    calculateMeldScore(creatinine:number,bilirubin:number,inr:number,sodium:number){
       this.meldScore= this.meldCalculatorService.calculateMeldScore(creatinine,bilirubin,inr,sodium);
    }

    setMeldCalcInput(data:any){
        console.log("MeldCalculatorComponent:setMeldCalcInput Received Event with creatinine,bil,inr,sodium");
        this.calculateMeldScore(data.cr,data.bl, data.inr,data.so);
      }
}