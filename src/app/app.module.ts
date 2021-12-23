import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HtmlComponent } from './html/html.component';
import { JavaComponent } from './java/java.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangebgDirective } from './changebg.directive';
import { CssComponent } from './css/css.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HtmlComponent,
    JavaComponent,
    HeaderComponent,
    ChangebgDirective,
    CssComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
