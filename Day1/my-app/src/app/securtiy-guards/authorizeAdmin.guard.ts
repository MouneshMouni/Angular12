import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { SecurityDataService } from "../dataServices/security.data.service";
import { UserInfo } from "../models/domain.models";

@Injectable({
    providedIn: "root"
})

export class AuthorizeAdminGuard implements CanActivate {
    isOk: boolean = false;
    userInfo: any;

    constructor(private router: Router, private securityService: SecurityDataService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const strInfo = localStorage.getItem("userInfo");
        if (strInfo != null) {
            const userInfo = JSON.parse(strInfo);
            return new Observable((observer)=>{
                this.securityService.authorizeUser(userInfo).subscribe((info: UserInfo) => {
                    this.userInfo = info;
                    if(this.userInfo.role === 'admin'){
                        this.isOk = true;
                    } else {
                        this.isOk = false;
                        this.router.navigateByUrl("/login");
                    }
                    observer.next(this.isOk);
                    observer.complete();
                });
            });
        } else {
            this.router.navigateByUrl("/login");
            return this.isOk = false;
        }
    }

}
