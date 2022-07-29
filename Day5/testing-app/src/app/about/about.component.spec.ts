import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HighlightDirective } from "../shared/highlight.directive";
import { AboutComponent } from "./about.component"

let fixture:ComponentFixture<AboutComponent>;
describe('About Component, (highlightDirective)',()=>{
    beforeEach(()=>{
        fixture = TestBed.configureTestingModule({
            declarations: [AboutComponent, HighlightDirective],
            schemas:[CUSTOM_ELEMENTS_SCHEMA]
        }).createComponent(AboutComponent);
        fixture.detectChanges();
    });
    //Test if the bgColor of the h2 element is skyblue
    //Now the component has loaded and we can walk up/down ---- it's DOM
    it("should have skblue <h2>", ()=> {
        const h2 = fixture.nativeElement.querySelector('h2');
        const bgColor = h2.style.backgroundColor;
        //assert
        expect(bgColor).toBe("skyblue");
    });
})