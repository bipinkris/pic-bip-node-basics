
import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from "@angular/core";

@Directive({
    selector:'[hover]'
})

export class HoverDirective implements OnInit,OnChanges{

    @Input()
    hover:string ='red';

    @Input()
    selectedStateColor:string ='red';

    //Dependency Injection
    constructor(private targetElement:ElementRef,private domApi: Renderer2){
        console.log("HoverDirective const ",this.hover);
        //domApi.setStyle(targetElement.nativeElement,"color",this.defaultColorValue);
    }

    ngOnInit(): void {
       console.log("ngOnInit",this.hover);
       this.domApi.setStyle(this.targetElement.nativeElement,"color",this.hover);
    }

    
    ngOnChanges(changes: SimpleChanges): void {
        console.log("ngOnChanges",this.hover);
    }

    @HostListener("mouseenter")
    onHostMouseEnter(){
       console.log("onHostMouseEnter",this.hover,this.selectedStateColor);
       this.domApi.setStyle(this.targetElement.nativeElement,"color",this.hover);
    }

    @HostListener("mouseleave")
    onHostMouseLeave(){
       console.log("onHostMouseLeave",this.hover,this.selectedStateColor);
       this.domApi.setStyle(this.targetElement.nativeElement,"color",this.selectedStateColor);
       
    }

}