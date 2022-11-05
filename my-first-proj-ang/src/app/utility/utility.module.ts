
import { NgModule } from "@angular/core";
import { DefaultValuePipe } from "./pipes/defaultValue.pipe";
import { HoverDirective } from "./directives/hover.directive";

@NgModule({
    declarations:[DefaultValuePipe,HoverDirective],
    exports:[DefaultValuePipe,HoverDirective]
})

export class UtilityModule{

}