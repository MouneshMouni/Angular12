import { Component, OnInit } from "@angular/core";
import { OrdersDataService } from "../dataServices/orders.data.service";
import { OrdersInfo } from "../models/domain.models";

@Component({
    selector:"app-orders",
    templateUrl:'./orders.component.html'
})

export class OrdersComponent implements OnInit{
    orders: OrdersInfo[] = [];
    currencyCode: string ="INR";
    constructor(private ordersDataService: OrdersDataService){

    }
    ngOnInit(): void {
        this.ordersDataService.getAllOrders().subscribe(
            (response)=>{
                this.orders = response;
            }
        );
      
    }

}