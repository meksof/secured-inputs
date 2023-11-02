import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'Secured Password Input';
  isPasswordMatched = false;

  passwordMatched(matched: boolean)
  {
    this.isPasswordMatched = matched;
  }
}
