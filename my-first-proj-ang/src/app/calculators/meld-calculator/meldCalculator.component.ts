import { Component,ViewChild } from "@angular/core";

//Logic
@Component({
    templateUrl:'./meldCalculator.component.html',
    selector:'meld-calc'
})
export class MeldCalculatorComponent{
    creatinine:number=0;
    total_bil:number=0;
    INR:number=0;
    meldScore:number=0;

    @ViewChild("creatinine_editBox")
    textBoxReference_creatinine:any;

    setCreatinine(data:string){
        console.log("setCreatinine invoked",data);
        this.creatinine = parseInt(data);
    }

    setBilirubin(data:string){
        console.log("setBilirubin invoked",data);
        this.total_bil = parseInt(data);
    }

    setINR(data:string){
        console.log("setINR invoked",data);
        this.INR = parseInt(data);
    }

    constructor(){
    }

    reset(){
        console.log("reset");
        this.creatinine=0;
        //console.log(this.textBoxReference_creatinine);
        //this.textBoxReference_creatinine.nativeElement.value="";
        this.total_bil=0;
        this.INR=0;
        this.meldScore=0;
    }

    calculateMeldScore(){
        this.meldScore= 9.57 * Math.log(this.creatinine) + 3.78 * Math.log (this.total_bil) + 11.2 * Math.log (this.INR) + 6.43;
    }
}