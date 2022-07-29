import { AuthConfig } from 'angular-oauth2-oidc';
export const authConfig: AuthConfig = {
    // Url of the Identity Provider  
    issuer: 'https://steyer-identity-server.azurewebsites.net/identity',
    // Login Url of the Identity Provider  

    // URL of the SPA to redirect the user to after login  
    redirectUri: window.location.origin + '/index.html',
    // The SPA's id. The SPA is registerd with this id at the auth-server  
    clientId: 'spa-demo',
    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. Also provide user sepecific
    scope: 'openid profile email voucher',
}