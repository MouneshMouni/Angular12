import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})

export class GateKeeperGuard implements CanActivate{
    isOk : boolean = false
    constructor (private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const strUserInfo = localStorage.getItem("userInfo");
        if(strUserInfo !== null){
            const userInfo = JSON.parse(strUserInfo);
            if(userInfo){
                this.isOk = true;
            } else {
                this.isOk = false;
                this.router.navigateByUrl("/login");
            }
        } else {
            this.isOk = false;
            this.router.navigateByUrl("/login");
            }
            return this.isOk;
        }
    }

    
