import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { NewsComponentIn } from './news/news.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponentIn
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [DataService]
})
export class AppModule {
    constructor(private injector: Injector){
      const el = createCustomElement(NewsComponentIn,{injector});
      customElements.define('news-widget-us', el);
    }
    
    ngDoBootstrap(){
      
    }
 }
