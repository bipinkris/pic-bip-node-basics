import { NgModule } from "@angular/core";


import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app-component/app.component";
import { CalculatorsModule } from "./calculators/calculators.module";
import { UtilityModule } from "./utility/utility.module";


@NgModule({
    declarations:[AppComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,CalculatorsModule,UtilityModule],   
})
export class AppModule{

}