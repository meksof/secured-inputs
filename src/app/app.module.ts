import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CONFIG } from 'src/environments/config';
import { appConfig } from 'src/environments/app.config';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadChildren: () => import('./numerical-password-input/numerical-password.module')
                    .then(m => m.NumericalPasswordModule)
            },
            {
                path: 'result',
                loadChildren: () => import('./result/result.module')
                    .then(m => m.ResultModule)
            }
        ]
    }
]

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        {
            provide: CONFIG, useValue: appConfig
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule
{ }
