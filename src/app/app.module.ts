import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FooterComponent} from "./footer/footer.component";
import {HomePageComponent} from "./homePage/homePage.component";
import {DownComponent} from "./down/down.component";
import {OurUserComponent} from "./ourUsers/ourUser.component";
import {LogInComponent} from "./logIn/logIn.component";
import {CheckInComponent} from "./checkIn/checkIn.component";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomePageComponent,
    DownComponent,
    OurUserComponent,
    LogInComponent,
    CheckInComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
