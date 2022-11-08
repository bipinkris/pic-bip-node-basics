
export class MeldCalculatorService{
    constructor(){
    }

    calculateMeldScore(creatinine:number,bilirubin:number,inr:number,sodium:number):number{
        console.log("MeldCalculatorService calculateMeldScore called");
        return 9.57 * Math.log(creatinine) + 3.78 * Math.log (bilirubin) + 11.2 * Math.log (inr) + 6.43;      
     }

}