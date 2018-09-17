import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  logVisib: boolean = false;
  checkVisib: boolean = false;

  showLogIn(): void {
    this.logVisib = !this.logVisib;
    this.checkVisib = false;
  }

  showCheckIn(): void {
    this.checkVisib = !this.checkVisib;
    this.logVisib = false;
  }
}
