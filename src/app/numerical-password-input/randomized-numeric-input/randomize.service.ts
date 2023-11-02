import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class RandomizeService {
    randomize(): Array<number> {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -1].sort(function () { return .5 - Math.random(); });
    }
}
