import { TestBed } from "@angular/core/testing";
import { NumericalPasswordInputComponent } from "./numerical-password-input.component";
import { PasswordService } from "./password.service";
import { CONFIG } from "src/environments/config";

let NPIComponent: NumericalPasswordInputComponent;
let passwordService: PasswordService;

describe('COMPONENT: NumericalPasswordInput', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [
                NumericalPasswordInputComponent,
                {
                    provide: CONFIG,
                    useValue: {
                        password: '12'
                    }
                },
                {
                    provide: PasswordService,
                    useValue: {
                        matched: false
                    }
                }
            ]
        });

        NPIComponent = TestBed.inject(NumericalPasswordInputComponent);
        passwordService = TestBed.inject(PasswordService);
    });

    describe('METHOD: notifyMatchedPassword', () =>
    {
        describe('Given a sequence of numbers, should notify if it is a ...', () =>
        {
            it('Valid password', () =>
            {
                NPIComponent.notifyWhenMatched(1);
                NPIComponent.notifyWhenMatched(2);

                expect(passwordService.matched).toBeTrue();
            });

            it('Not valid password', () =>
            {
                NPIComponent.notifyWhenMatched(8);
                NPIComponent.notifyWhenMatched(9);
                NPIComponent.notifyWhenMatched(10);

                expect(passwordService.matched).toBeFalse();
            })
        })
    })
})