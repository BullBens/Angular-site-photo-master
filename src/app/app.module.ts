import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomePageComponent} from './homePage/homePage.component';
import {DownComponent} from './down/down.component';
import {OurUserComponent} from './ourUsers/ourUser.component';
import {LogInComponent} from './logIn/logIn.component';
import {CheckInComponent} from './checkIn/checkIn.component';
import { UserBlockComponent } from './user-block/user-block.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DownComponent,
    OurUserComponent,
    LogInComponent,
    CheckInComponent,
    UserBlockComponent,
    UserBlockComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
