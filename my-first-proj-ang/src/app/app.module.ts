import { NgModule } from "@angular/core";


import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app-component/app.component";
import { CalculatorsModule } from "./calculators/calculators.module";
import { UtilityModule } from "./utility/utility.module";
import { AccountsModule } from "./accounts/accounts.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations:[AppComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,CalculatorsModule,UtilityModule,AccountsModule, BrowserAnimationsModule],   
})
export class AppModule{

}