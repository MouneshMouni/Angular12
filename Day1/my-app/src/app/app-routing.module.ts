import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./layoutComponents/login.component";

//provide only root level paths

//for an entire application there is only 1 route dictionary

const routes:Routes = [
    {path:'', pathMatch:"full", redirectTo:'/customers'},
    {path:'*', pathMatch:"full", redirectTo:'/customers'},
    {path:'', pathMatch:"full", redirectTo:'/orders'},
    {path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}