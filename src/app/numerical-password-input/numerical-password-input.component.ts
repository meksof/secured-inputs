import { Component, Input, EventEmitter, Output } from '@angular/core';
import { config } from '../../environments/config';
@Component({
  selector: 'numerical-password-input',
  templateUrl: './numerical-password-input.component.html',
  styleUrls: ['./numerical-password-input.component.scss']
})
export class NumericalPasswordInputComponent {

  @Input() userPassword: String = '';
  @Output() passwordMatch = new EventEmitter();

  appendNewNumber($event) {
    this.userPassword += $event;
    if (this.userPassword.length >= 9) {
      if (this.userPassword === config.password) {
        // Passwords are matched, Fire onPasswordMatch event
        this.passwordMatch.emit();
      } else {
        // Reset if password length exceeds 9 numbers
        this.userPassword = '';
      }
    }
  }

}
