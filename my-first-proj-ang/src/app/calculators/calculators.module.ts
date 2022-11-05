import { NgModule } from "@angular/core";

import { MeldCalculatorComponent } from "./meld-calculator/meldCalculator.component";
import { CommonModule } from "@angular/common";
import { UtilityModule } from "../utility/utility.module";
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[MeldCalculatorComponent, BmiCalculatorComponent], 
    imports:[CommonModule,UtilityModule,FormsModule],
    exports:[MeldCalculatorComponent,BmiCalculatorComponent]  
})

export class CalculatorsModule{

}