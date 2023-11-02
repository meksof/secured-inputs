import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'password-viewer',
  templateUrl: './password-viewer.component.html',
  styleUrls: ['./password-viewer.component.scss']
})
export class PasswordViewerComponent {

  @Input() password: string = '';
  @Output() reset = new EventEmitter();
  public hintLabel = 'Tap "1234"';
  
  resetClicked()
  {
    this.reset.emit();
  }
}
