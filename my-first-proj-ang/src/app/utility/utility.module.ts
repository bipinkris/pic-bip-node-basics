
import { NgModule } from "@angular/core";
import { DefaultValuePipe } from "./pipes/defaultValue.pipe";

@NgModule({
    declarations:[DefaultValuePipe],
    exports:[DefaultValuePipe]
})

export class UtilityModule{

}