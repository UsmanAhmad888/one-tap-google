import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

// declare var gapi: any
@Component({
  selector: 'app-google-connector',
  templateUrl: './google-connector.component.html',
  styleUrls: ['./google-connector.component.css']
})
export class GoogleConnectorComponent implements OnInit {
  // socialConfig = Config.secretKeys;
  @Output() networkInfo: EventEmitter<object> = new EventEmitter<object>();
  title = 'google-login';

  user: any;
  loggedIn!: boolean;
  socialUser!: SocialUser;
  isLoggedin!: boolean;
  constructor(
    private socialAuthService: SocialAuthService
  ) { }

  ngOnInit() {
    
  }

  loginWithGoogle(): void {
    this.loggedIn=true;
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user=>{
      this.socialUser = user;
      if(user.email &&  this.loggedIn){
        console.log("login app authenticated",user);
        
        this.networkInfo.emit({lastName:this.socialUser.lastName,firstName:this.socialUser.firstName,email:this.socialUser.email,signupType:'Google'});
        // console.log(this.socialUser);
        this.logOut();
        this.loggedIn=false
      }
    })
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }

  signInWithGoogle = async () => {
    
  }
  loadClient = () => {
  
  }

  

  signOut(): void {
  
  }
}
