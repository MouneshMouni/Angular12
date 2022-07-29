import { Component, Input, OnInit } from "@angular/core";
import { ICustomer } from "src/app/models/iCustomers";
import { CustomerDataService } from "../../dataServices/customer.data.service";

@Component({
    selector:"app-customers-list",
    templateUrl: "./customers-list.component.html",
    styles:[".totalOrder{background-color: lightblue}",
".recordCount{background-color: green}", ".noRecordCount{background-color: red}"]
})

export class CustomersListComponent implements OnInit{
    title:string="";
    //backing field
    _customers : ICustomer[] = [];
    currencyCode: string = "INR";
    ordersTotal: number = 20;
    isAscOrder: boolean = true;
    filteredCustomerTypes: ICustomer[] = [];
    //expose _customers as a property(interface)
    get customers(): ICustomer [] {
        return this._customers;
    }

    @Input() set customers(value:ICustomer[]){
        this._customers = this.filteredCustomerTypes = value;
        this.calculateOrdersTotal();
    }

    public constructor(
        protected customerService: CustomerDataService
    ){}
    ngOnInit(): void {
        this.title = "Customers List Component"
    }

    calculateOrdersTotal(){
        if(this.customers){
            this.ordersTotal = 0;
            this._customers.forEach((cust)=>{
                this.ordersTotal += cust.orderTotal;
            });
        }
    }

    sortCustomers(sortProp:string){
        this.isAscOrder = !this.isAscOrder;
        if(this.isAscOrder){
            this._customers.sort((a:any, b:any)=>{
                return a[sortProp] > b[sortProp] ? -1 : 1;
            });
        } else {
            this._customers.sort((a:any, b:any)=>{
                return a[sortProp] < b[sortProp] ? -1 : 1;
            });
        }
    }

    filterCustomers(filterText:string){
        // this.filteredCustomerTypes = this.customers.filter((cust:ICustomer)=>{
        //     return cust.id.toString().toLowerCase().indexOf(filterText.toLocaleLowerCase())>-1 ||
        //     cust.name.toString().toLowerCase().indexOf(filterText.toLocaleLowerCase())>-1 ||
        //     cust.city.toString().toLowerCase().indexOf(filterText.toLocaleLowerCase())>-1 ||
        //     cust.customerSince.toString().toLowerCase().indexOf(filterText.toLocaleLowerCase())>-1 ||
        //     cust.orderTotal.toString().toLowerCase().indexOf(filterText.toLocaleLowerCase())>-1;
        // })
        if(filterText.length > 0){
            this.customerService.searchCustomers(filterText).subscribe(
                (response)=>{
                    this.filteredCustomerTypes = response;
                }
            )
        }
    }

    saveFilterList(){
        localStorage.setItem("myFilterData", JSON.stringify(this.filteredCustomerTypes));
    }

    loadFilterList(){
        let stringData = localStorage.getItem("myFilterData");
        if(stringData != null) this.filteredCustomerTypes = JSON.parse(stringData);
        this.calculateOrdersTotal();
    }
}