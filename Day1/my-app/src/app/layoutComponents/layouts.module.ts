import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FoooterComponent } from "./footer.component";
import { HeaderComponent } from "./header.component";
import { LeftMenuComponent } from "./leftMenu.component";
import { LoginComponent } from "./login.component";

@NgModule ({
    declarations:[HeaderComponent, LeftMenuComponent, FoooterComponent, LoginComponent],
    exports: [HeaderComponent, LeftMenuComponent, FoooterComponent, LoginComponent],
    imports: [FormsModule]
})

export class LayoutModule {}