import { Component } from '@angular/core';
import { PasswordService } from '../numerical-password-input/password.service';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent
{
    public isMatched = false;

    constructor (
        private passwordService: PasswordService
    )
    {}

    ngOnInit (): void
    {
        this.isMatched = this.passwordService.matched;
    }
}
