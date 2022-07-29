import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthorizeAdminGuard } from "../securtiy-guards/authorizeAdmin.guard";
import { GateKeeperGuard } from "../securtiy-guards/gateKeeper.guard";
import { OrdersComponent } from "./orders.component";

const routes:Routes = [
    {path:'orders', component: OrdersComponent, canActivate:[AuthorizeAdminGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class OrdersRoutingModule{

}