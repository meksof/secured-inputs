import { Component, Inject } from '@angular/core';

import { CONFIG, AppConfig } from '../../environments/config';
import { MAX_PASSWORD_LENGTH } from './numerical-password-input.constants';
import { PasswordService } from './password.service';

@Component({
    selector: 'numerical-password-input',
    templateUrl: './numerical-password-input.component.html',
    styleUrls: ['./numerical-password-input.component.scss']
})
export class NumericalPasswordInputComponent
{
    private _numbers: number[] = [];
    public get password (): string
    {
        return this._numbers.join('');
    }
    private set password (value: Array<number>)
    {
        this._numbers = value;
    }

    constructor (
        @Inject(CONFIG) private config: AppConfig,
        private passwordService: PasswordService
    )
    {}

    notifyWhenMatched (x: number)
    {
        if (this._numbers.length > MAX_PASSWORD_LENGTH)
        {
            return;
        }

        this.password = [...this._numbers, x];

        if (this.password === this.config.password)
        {
            this.notify();
        }
    }

    resetPassword ()
    {
        this.password = [];
    }

    private notify ()
    {
        this.passwordService.matched = true;
    }

}
