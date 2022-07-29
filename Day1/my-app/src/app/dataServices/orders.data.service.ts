import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { OrdersInfo } from "src/app/models/domain.models";

@Injectable()

export class OrdersDataService {
    orderUrl = "http://localhost:3000/orders";

    constructor(
        protected http: HttpClient
    ) { }

    getAllOrders(): Observable<OrdersInfo[]> {
        return this.http.get<OrdersInfo[]>(this.orderUrl).pipe(
            catchError(this.handelError)
        );
    }

    handelError(error: any) {
        return throwError(error || "Comes error from API");
    }

}
