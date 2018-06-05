import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'randomized-numeric-input',
  templateUrl: './randomized-numeric-input.component.html',
  styleUrls: ['./randomized-numeric-input.component.scss'],

})
export class RandomizedNumericInputComponent {

  @Input() currentNumber: number;
  @Output() currentNumberChange = new EventEmitter<number>();
  availableNumbers: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -1]; // Numbers to be randomized

  constructor() {
    this.randomizeNumbers();
  }

  numberClicked(number) {
    // Emit an event with the current button value
    this.currentNumberChange.emit(number);
  }

  randomizeNumbers() {
    this.availableNumbers.sort(function () { return .5 - Math.random(); });
  }

}
