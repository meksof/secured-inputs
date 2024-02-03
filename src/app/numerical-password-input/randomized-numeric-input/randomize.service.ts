import { Injectable } from '@angular/core';

@Injectable({
    providedIn: null
})
export class RandomizeService
{
    /**
     * Note: We need the output to include -1, so the UI will display
     * an empty button
     * @returns An array of random numbers from 0 to 9
     */
    randomize (): Array<number>
    {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -1].sort(function ()
        {
            return .5 - Math.random();
        });
    }
}
