import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CustomerDataService } from "./customer.data.service";
import { OrdersDataService } from "./orders.data.service";
import { SecurityDataService } from "./security.data.service";

@NgModule({
    providers:[CustomerDataService, SecurityDataService, OrdersDataService],
    imports:[HttpClientModule]
})

export class DataServicesModule {}