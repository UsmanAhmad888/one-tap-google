import { Component } from '@angular/core';
import { NgOneTapService } from 'ng-google-one-tap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'social-login';
  
  userDetails:any;
  constructor(private oneTap: NgOneTapService) { }

   ngOnInit() {
        /** Initialize OneTap, While initialing you can pass config  like this.oneTap.tapInitialize(config) here config is optional. **/
        this.oneTap.tapInitialize();

        /** Subscribe the Tap Moment. following response options all have self explanatory.
         *  If you want more info please refer at bottom of the document attached link. **/
        this.oneTap.promtMoment.subscribe(res => { 
           res.getDismissedReason(); 
           res.getMomentType();
           res.getNotDisplayedReason();
           res.getSkippedReason();
           res.isDismissedMoment();
           res.isDisplayed();
           res.isNotDisplayed();
           res.isSkippedMoment();
        });

        /** The JWT credentials will be returned as a response after completing the one tap process.  **/
        this.oneTap.oneTapCredentialResponse.subscribe(res => {
            /**  Response
             * clientId: your client ID,
             * client_id: your client ID,
             * credential: The credential/secret key is utilized for user validation and information retrieval. Validation can be performed on the backend server/platform using the appropriate Google library. Please refer to the backend implementation details at the bottom of the document
             **/
        });

        /** Authentication validation can be performed using the Google OAuth2 APIs, eliminating the need for client_id validation on the backend and the retrieval of user details **/
        this.oneTap.authUserResponse.subscribe(res => { 
            this.userDetails = res;
        });

   }

    tapCancel() {
        this.oneTap.cancelTheTap();
    }
}
