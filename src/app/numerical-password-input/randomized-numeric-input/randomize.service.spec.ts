/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { RandomizeService } from './randomize.service';

describe('Service: Randomize', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [RandomizeService]
        });
    });

    describe('METHOD: randomize', () =>
    {
        it(
            'should include numbers from 0 to 9',
            inject(
                [RandomizeService],
                (service: RandomizeService) =>
                {
                    const numbers = service.randomize();
                    [0,1,2,3,4,5,6,7,8,9].forEach((n: number) =>
                    {
                        expect(numbers).toContain(n);
                    })
                }
            )
        );

        it(
            'should create random sequence of numbers',
            inject(
                [RandomizeService],
                (service: RandomizeService) =>
                {
                    const first_generated_numbers = service.randomize();
                    const second_generated_numbers = service.randomize();

                    expect(first_generated_numbers).not.toEqual(second_generated_numbers);
                }
            )
        );
    })
});
