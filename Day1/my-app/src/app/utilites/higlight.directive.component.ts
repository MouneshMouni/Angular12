import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector:'[appHighlight]'
})

export class HighligthDirective {
    constructor(private el: ElementRef){
        this.el.nativeElement.style.backgroundColor = 'yellow';
    }
}