import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class ApiKeyCustomerHeaderInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       console.log("Customer Interceptor called");
       //clone the request
       //create a custom header
       //send the cloned request
       const reqClone = request.clone({
        headers: request.headers.set('apikey','dffkfd32443298749841432')
       })
       return next.handle(reqClone);
    }
    
}