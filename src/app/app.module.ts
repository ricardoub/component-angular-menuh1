import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuhModule } from './menuh/menuh.module';
import { MenuhService } from "app/menuh/menuh.service";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuhModule
  ],
  providers: [ MenuhService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
