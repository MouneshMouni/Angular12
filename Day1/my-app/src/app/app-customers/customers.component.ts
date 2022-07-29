import { Component, OnInit } from "@angular/core";
import { ICustomer } from "../models/iCustomers";
import { CustomerDataService } from "../dataServices/customer.data.service";

@Component({
    selector:"app-customers",
    templateUrl:"./customers.component.html"
})

export class CustomersComponent implements OnInit{
    title: string = "";
    lstCustomers: ICustomer[] = [];
    constructor (
        private customerService: CustomerDataService
    ) {}
    ngOnInit(): void {
        this.title = "Customers Component";
        this.customerService.getAllCustomers().subscribe(
           (custs:ICustomer[])=>{ 
                this.lstCustomers = custs;
            }
        )
    }
}