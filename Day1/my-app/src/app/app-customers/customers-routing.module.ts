import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GateKeeperGuard } from "../securtiy-guards/gateKeeper.guard";
import { CustomersComponent } from "./customers.component";

const routes:Routes = [
    {path:'customers', component: CustomersComponent, canActivate:[GateKeeperGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class CustomersRoutingModule{

}