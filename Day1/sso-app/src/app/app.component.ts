import { Component } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './sso.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sso-app';

  constructor(
    private oAuthservice: OAuthService
  ){
    this.configureSingleSignOn();
  }

  private configureSingleSignOn(){
    this.oAuthservice.configure(authConfig);
    this.oAuthservice.tokenValidationHandler = new JwksValidationHandler();
    this.oAuthservice.loadDiscoveryDocumentAndTryLogin();
  }

  login(){
    this.oAuthservice.initImplicitFlow();
  }

  logout(){
    this.oAuthservice.logOut();
  }

  get token (){
    let claims:any = this.oAuthservice.getIdentityClaims();
    console.log(claims);
    return claims ? claims : null;
  }
}
