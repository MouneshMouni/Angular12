import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DataServicesModule } from "../dataServices/data.services.module";
import { OrdersComponent } from "./orders.component";
import { OrdersRoutingModule } from "./orders.routing.module";


@NgModule({
    declarations:[OrdersComponent],
    exports:[OrdersComponent],
    imports:[OrdersRoutingModule, BrowserModule, DataServicesModule]
})

export class AppOrdersModule {

}