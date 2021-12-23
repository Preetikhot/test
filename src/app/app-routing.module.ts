import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './css/css.component';
import { HtmlComponent } from './html/html.component';
import { JavaComponent } from './java/java.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',redirectTo:'welcome',pathMatch:"full"},
  {path:'welcome',component:WelcomeComponent},
  {path:'html',component:HtmlComponent},
  {path:'java',component:JavaComponent},
  {path:'css',component:CssComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
