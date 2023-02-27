import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NgGoogleOneTapModule } from 'ng-google-one-tap';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { GoogleConnectorComponent } from './google-connector/google-connector.component';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    GoogleConnectorComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    AppRoutingModule,
    // NgGoogleOneTapModule.config(
    //   {
    //     client_id: '820987339217-j0in5e0ujrdtl4ht863909c5uktlialn.apps.googleusercontent.com',
    //     scope:'https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.readonly&',
    //     cancel_on_tap_outside: false,
    //     authvalidate_by_googleapis: false,
    //     auto_select: false,
    //     disable_exponential_cooldowntime: false,
    //     context: 'signup',
    //   })
  

  ],
  providers: [   {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            environment.googleClientId
          )
        }
      ]
    } as SocialAuthServiceConfig,
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
