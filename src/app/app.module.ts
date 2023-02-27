import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgGoogleOneTapModule } from 'ng-google-one-tap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgGoogleOneTapModule.config(
      {
        client_id: '820987339217-j0in5e0ujrdtl4ht863909c5uktlialn.apps.googleusercontent.com',
        scope:'https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.readonly&',
        cancel_on_tap_outside: false,
        authvalidate_by_googleapis: false,
        auto_select: false,
        disable_exponential_cooldowntime: false,
        context: 'signup',
      })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
