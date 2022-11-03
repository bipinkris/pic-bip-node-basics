import { NgModule } from "@angular/core";

import { MeldCalculatorComponent } from "./meld-calculator/meldCalculator.component";
import { CommonModule } from "@angular/common";
import { UtilityModule } from "../utility/utility.module";

@NgModule({
    declarations:[MeldCalculatorComponent],
    //imports:[CommonModule],
    imports:[CommonModule,UtilityModule],
    exports:[MeldCalculatorComponent]  
})

export class CalculatorsModule{

}