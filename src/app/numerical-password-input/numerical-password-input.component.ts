import { Component, Input, EventEmitter, Output } from '@angular/core';
import { config } from '../../environments/config';
@Component({
  selector: 'numerical-password-input',
  templateUrl: './numerical-password-input.component.html',
  styleUrls: ['./numerical-password-input.component.scss']
})
export class NumericalPasswordInputComponent {
  public password: string = '';
  @Output() passwordMatched: EventEmitter<boolean> = new EventEmitter(false);
  private numbers: Array<number> = [];

  appendNumber(x: number) {
    if (this.numbers.length > 9) {
      // We don't want the password length to exceeds 9 numbers
      return;
    }

    this.numbers = [...this.numbers, x];
    this.password = this.numbers.join('');

    if (this.password === config.password) {
      // Passwords are matched, Fire passwordMatched event
      this.passwordMatched.emit(true);
    }
  }

  resetPassword()
  {
    this.numbers = [];
    this.password = '';
  }
}
