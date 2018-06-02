import { Component } from '@angular/core';
import {NumericalPasswordInputComponent} from "./numerical-password-input/numerical-password-input.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'app';
  passwordIsOK = false;

}
