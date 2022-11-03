import { NgModule } from "@angular/core";

import { MeldCalculatorComponent } from "./meld-calculator/meldCalculator.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    bootstrap:[MeldCalculatorComponent],
    imports:[BrowserModule]   
})
export class AppModule{

}