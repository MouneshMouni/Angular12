import { ComponentFixture, TestBed } from "@angular/core/testing"
import { BannerComponent } from "./banner.component";

let fixture:ComponentFixture<BannerComponent>, component:BannerComponent, h1 :HTMLElement;
describe('Banner Component',()=>{
    beforeEach(()=>{
       TestBed.configureTestingModule({
            declarations: [BannerComponent]
        });
        fixture = TestBed.createComponent(BannerComponent);
        component = fixture.componentInstance;
        h1 = fixture.nativeElement.querySelector("h1");
    });
    
    it("Title must be empty", ()=> {
       expect(h1.textContent).toEqual('');
    });

    //check for the tilte after dectectchanges is called
    it("Title must display original title", ()=> {
        fixture.detectChanges();
        expect(h1.textContent).toEqual(component.title);
     });

     it("Title must change to custom title prop change", ()=> {
        component.title = "My New Title";
        fixture.detectChanges();
        expect(h1.textContent).toEqual("My New Title");
     });
})