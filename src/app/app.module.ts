import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumericalPasswordInputComponent } from './numerical-password-input/numerical-password-input.component';
import { PasswordViewerComponent } from './numerical-password-input/password-viewer/password-viewer.component';
import { RandomizedNumericInputComponent } from './numerical-password-input/randomized-numeric-input/randomized-numeric-input.component';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NumericalPasswordInputComponent,
    PasswordViewerComponent,
    RandomizedNumericInputComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
