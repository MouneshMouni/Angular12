import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SecurityDataService } from "../dataServices/security.data.service";
import { AuthInfo } from "../models/domain.models";

@Component({
    template: `
    <table>
    <tr>
    <td colspan="2"></td>
    </tr>
    <tr>
    <td>User Id</td>
    <td>  <input type="text" name="userId" [(ngModel)]="loginModel.userId"></td>
    </tr>
    <tr>
    <td>Password</td>
    <td>  <input type="password" name="password" [(ngModel)]="loginModel.password"></td>
    </tr>
    <tr>
    <td>
    Submit</td>
    <td><input type="submit" (click)="login()"></td>
    </tr>
    </table>
    `
})

export class LoginComponent implements OnInit {
    loginModel: AuthInfo;
    data = '';
    constructor(private router: Router,
        private authService: SecurityDataService){
        this.loginModel = new AuthInfo('xxxx', 'xxxx');
        this.data = JSON.stringify(this.loginModel);
    }
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    login() { 
        this.authService.authUser(this.loginModel).subscribe(
            (userInfo)=>{
                localStorage.setItem('userInfo', JSON.stringify(userInfo));
                this.router.navigateByUrl("/customers");
            }
        );
        
    }

}