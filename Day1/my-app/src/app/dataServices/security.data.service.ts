import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { ICustomer } from "src/app/models/iCustomers";
import { HttpClient } from "@angular/common/http";
import { catchError, map, retry } from "rxjs/operators";
import { AuthInfo, UserInfo } from "src/app/models/domain.models";

@Injectable()

export class SecurityDataService {
    authUrl = "http://localhost:3000/auth";
    authorizeUrl = "http://localhost:3000/authorize";

    constructor(
        protected http: HttpClient
    ) { }

    authUser(authInfo: AuthInfo): Observable<UserInfo> {
        return this.http.post<UserInfo>(this.authUrl, authInfo).pipe(
            retry(3),
            catchError(this.handelError)
        );
    }

    authorizeUser(userInfo: UserInfo): Observable<UserInfo> {
        return this.http.post<UserInfo>(this.authorizeUrl, userInfo).pipe(
            retry(3),
            catchError(this.handelError)
        );
    }

    handelError(error: any) {
        return throwError(error || "Comes error from API");
    }

}
