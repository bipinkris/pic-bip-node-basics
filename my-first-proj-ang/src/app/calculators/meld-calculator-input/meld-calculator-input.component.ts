import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-meld-calculator-input',
  templateUrl: './meld-calculator-input.component.html',
  styleUrls: ['./meld-calculator-input.component.css']
})
export class MeldCalculatorInputComponent implements OnInit {

  creatinine:number=0;
  total_bil:number=0;
  INR:number=0;
  sodium:number=0;

  @Output()
  onInputDataChange=new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

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

    calculateMeldScore() {
      console.log("MeldCalculatorInputComponent:calculateMeldScore Event Emit to pass Details to MeldCalculatorComponent ");     
      this.onInputDataChange.emit({cr:this.creatinine,bl:this.total_bil,inr:this.INR,so:this.sodium});
    }
    
    reset(){
        console.log("reset");
        this.creatinine=0;
        this.total_bil=0;
        this.INR=0;
        this.sodium=0;
        //console.log(this.textBoxReference_creatinine);
        //this.textBoxReference_creatinine.nativeElement.value="";   
    }
}
