import { Component, Input } from '@angular/core';

@Component({
  selector: 'password-viewer',
  templateUrl: './password-viewer.component.html',
  styleUrls: ['./password-viewer.component.scss']
})
export class PasswordViewerComponent {

  @Input() currentNumber: String;

}
