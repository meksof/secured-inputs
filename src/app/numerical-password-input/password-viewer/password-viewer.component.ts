import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { AppConfig, CONFIG } from 'src/environments/config';

@Component({
    selector: 'password-viewer',
    templateUrl: './password-viewer.component.html',
    styleUrls: ['./password-viewer.component.scss']
})
export class PasswordViewerComponent
{
    @Input() password: string = '';
    @Output() reset = new EventEmitter();
    public hintLabel = `Tap "${this.config.password}"`;

    constructor (
        @Inject(CONFIG) private config: AppConfig
    )
    {}

    resetClicked ()
    {
        this.reset.emit();
    }
}
