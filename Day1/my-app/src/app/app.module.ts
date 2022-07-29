import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomersModule } from './app-customers/customers.module';
import { AppOrdersModule } from './app-orders/orders.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ApiKeyCustomerHeaderInterceptor } from './interceptors/apikey.customerheader.interceptors ';
import { ApiKeyOrderHeaderInterceptor } from './interceptors/apikey.orderheader.interceptors';
import { LayoutModule } from './layoutComponents/layouts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, LayoutModule, CustomersModule, AppRoutingModule, AppOrdersModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiKeyCustomerHeaderInterceptor,
    multi: true
  },
    {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiKeyOrderHeaderInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
