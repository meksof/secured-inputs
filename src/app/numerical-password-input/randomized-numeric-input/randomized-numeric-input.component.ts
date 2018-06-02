import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'randomized-numeric-input',
  templateUrl: './randomized-numeric-input.component.html',
  styleUrls: ['./randomized-numeric-input.component.scss'],

})
export class RandomizedNumericInputComponent {

  @Input() currentNumber: Number;
  @Output() onCurrentNumberChange = new EventEmitter<Number>();
  availableNumbers: Array<Number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -1]; // Numbers to be randomized

  constructor() {
    this.randomizeNumbers();
  }

  numberClicked(event) {
    let value;
    // check whether the target is a button or span (due to material design extra tags)
    if (event.target.childElementCount > 0) {
      value = event.target.value;
    } else {
      value = event.target.parentElement.value;
    }
    // Emit an event with the current button value
    this.onCurrentNumberChange.emit(value);
  }

  randomizeNumbers() {
    this.availableNumbers.sort(function () { return .5 - Math.random() });
  }

}
