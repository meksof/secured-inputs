import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class PasswordService
{
    private _matched: boolean = false;

    constructor (
        private router: Router
    )
    {}

    get matched (): boolean
    {
        return this._matched;
    }

    set matched (value: boolean)
    {
        this._matched = value;
        // redirect to result page
        this.router.navigate([
            'result'
        ]);
    }
}