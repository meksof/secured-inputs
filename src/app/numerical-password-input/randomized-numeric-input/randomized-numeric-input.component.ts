import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { RandomizeService } from './randomize.service';

@Component({
  selector: 'randomized-numeric-input',
  templateUrl: './randomized-numeric-input.component.html',
  styleUrls: [
    './randomized-numeric-input.component.scss'
  ],
  providers: [
    RandomizeService
  ]

})
export class RandomizedNumericInputComponent {

  @Output() numClicked = new EventEmitter<number>();
  public numbers: Array<number>;

  constructor (
    private randomizeService: RandomizeService
  ) {
    this.numbers = this.randomizeService.randomize();
  }

  numberClicked(x: number) {
    this.numClicked.emit(x);
  }

  

}
