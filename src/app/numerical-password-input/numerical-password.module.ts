import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NumericalPasswordInputComponent } from './numerical-password-input.component';
import { PasswordViewerComponent } from './password-viewer/password-viewer.component';
import { RandomizedNumericInputComponent } from './randomized-numeric-input/randomized-numeric-input.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
    declarations: [
        NumericalPasswordInputComponent,
        PasswordViewerComponent,
        RandomizedNumericInputComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule.forChild([
            {
                path: '',
                component: NumericalPasswordInputComponent
            }
        ])
    ],
    exports: [
        NumericalPasswordInputComponent
    ]
})
export class NumericalPasswordModule
{ }
