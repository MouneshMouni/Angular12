import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { ICustomer } from "src/app/models/iCustomers";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";

@Injectable()

export class CustomerDataService {
    customerUrl = "http://localhost:3000/customers";

    constructor(
        protected http: HttpClient
    ) { }

    getAllCustomers(): Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(this.customerUrl).pipe(
            catchError(this.handelError)
        );
    }

    getCustomersIdAbove102(): Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(this.customerUrl).pipe(
            map(customers=>{
                let custs = customers.filter((cust)=> cust.id > 102 );
                return custs;
            }),
            catchError(this.handelError)
        );
    }

    searchCustomers(searchText:string): Observable<ICustomer[]>{
        return this.http.get<ICustomer[]>(this.customerUrl+'/'+searchText).pipe(
            catchError(this.handelError)
        );
    }

    handelError(error: any) {
        return throwError(error || "Comes error from API");
    }

}
