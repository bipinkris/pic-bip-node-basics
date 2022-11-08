import { NgModule } from "@angular/core";


import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app-component/app.component";
import { CalculatorsModule } from "./calculators/calculators.module";
import { UtilityModule } from "./utility/utility.module";
import { AccountsModule } from "./accounts/accounts.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsoleLoggerService } from "./services/consoleLogger.service";
import { ILogger } from "./services/logger.contract";
import { ApiLoggerService } from "./services/apiLogger.service";

@NgModule({
    declarations:[AppComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,CalculatorsModule,UtilityModule,AccountsModule, BrowserAnimationsModule],   
    providers:[
        {provide:"logger" ,useClass:ApiLoggerService},
        //{provide:"logger",useValue:new ConsoleLoggerService()},
        //{provide:"PI",useValue:3.14}
    ]
})
export class AppModule{

}