import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumericalPasswordModule } from './numerical-password-input/numerical-password.module';
import { ResultModule } from './result/result.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,

    NumericalPasswordModule,
    ResultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
