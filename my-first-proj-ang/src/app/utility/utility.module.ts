
import { NgModule } from "@angular/core";
import { DefaultValuePipe } from "./pipes/defaultValue.pipe";
import { HoverDirective } from "./directives/hover.directive";
import { FeedbackComponentComponent } from './feedback-component/feedback-component.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[DefaultValuePipe,HoverDirective, FeedbackComponentComponent],
    exports:[DefaultValuePipe,HoverDirective,FeedbackComponentComponent],
    imports:[ReactiveFormsModule,CommonModule]
})

export class UtilityModule{

}