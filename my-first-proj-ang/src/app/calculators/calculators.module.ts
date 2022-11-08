import { NgModule } from "@angular/core";

import { MeldCalculatorComponent } from "./meld-calculator/meldCalculator.component";
import { CommonModule } from "@angular/common";
import { UtilityModule } from "../utility/utility.module";
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { FormsModule } from "@angular/forms";
import { MaterialExampleModule } from "../material.module";
import { BmiCalculatorInputComponent } from './bmi-calculator-input/bmi-calculator-input.component';
import { BmiCalculatorResultComponent } from './bmi-calculator-result/bmi-calculator-result.component';
import { MeldCalculatorResultComponent } from './meld-calculator-result/meld-calculator-result.component';
import { MeldCalculatorInputComponent } from './meld-calculator-input/meld-calculator-input.component';

@NgModule({
    declarations:[MeldCalculatorComponent, BmiCalculatorComponent, BmiCalculatorInputComponent, BmiCalculatorResultComponent, MeldCalculatorResultComponent, MeldCalculatorInputComponent], 
    imports:[CommonModule,UtilityModule,FormsModule,MaterialExampleModule],
    exports:[MeldCalculatorComponent,BmiCalculatorComponent]  
})

export class CalculatorsModule{

}