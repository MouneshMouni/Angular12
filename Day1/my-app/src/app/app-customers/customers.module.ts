import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { UtilitesModule } from "../utilites/utilites.module";
import { CustomersRoutingModule } from "./customers-routing.module";
import { CustomersComponent } from "./customers.component";
import { CustomersListComponent } from "./customersList/customers-list.component";
import { FilterTextboxComponent } from "./customersList/filter-textbox.component";
import { DataServicesModule } from "../dataServices/data.services.module";


@NgModule ({
    declarations:[CustomersComponent, CustomersListComponent, FilterTextboxComponent],
    exports: [CustomersComponent],
    imports: [BrowserModule, UtilitesModule, FormsModule, DataServicesModule, CustomersRoutingModule]
})

export class CustomersModule {}